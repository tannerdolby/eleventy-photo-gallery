const sharp = require("sharp");
const fs = require("fs");
const CleanCSS = require("clean-css");
// const Image = require("@11ty/eleventy-img"); // future implementation (test code in log.txt)

module.exports = (eleventyConfig) => {
   
    eleventyConfig.setTemplateFormats([
        "md",
        "njk"
    ]);

    markdownTemplateEngine: "njk";

    // manual passthrough file copy to include /images and /css in _site output
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("favicon_data");

    // Use css-clean CSS Minifier filter
    eleventyConfig.addFilter("cssmin", function(code) {
        // console.log(new CleanCSS({}).minify(code).stats);
        return new CleanCSS({}).minify(code).styles;
    });

    // Configure image in a template paired shortcode
    eleventyConfig.addPairedShortcode("image", (srcSet, src, alt, sizes="(min-width: 400px) 33.3vw, 100vw") => {
        return `<img srcset="${srcSet}" src="${src}" alt="${alt}" sizes="${sizes}" />`;
    });

    // Configure outgoing Pexels anchor elements in a template paried shortcode
    eleventyConfig.addPairedShortcode("link", (href, cls="image-link", rel="noopener", target="_blank", btnTxt="Pexels") => {
        return `<a class="${cls}" href="${href}" rel="${rel}" target="${target}">${btnTxt}</a>`;
    });

    // Use the sharpImages function to create 3 resized sharp versions of a specified image file.
    function sharpImages(fileName) {
        let resizeImgSmall = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(fileName)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(320, 240)
                    .toFile(`${shortName}-small.webp`);
        };
        resizeImgSmall();

        let resizeImgMed = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(fileName)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(640, 480)
                    .toFile(`${shortName}-med.webp`);
        };
        resizeImgMed();
        
        let resizeImgLarge = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(`${fileName}`)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(1024, 768)
                    .toFile(`${shortName}-large.webp`);
        };
        resizeImgLarge();
    }
    // Comment out or remove the the function call once you've created all the resized images you need :)
    // sharpImages("./images/wet-street.jpg"); 
    // Todo: create an array argument to pass mulitple images into instead of one by one (way too cumbersome)
    
};