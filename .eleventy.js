const sharp = require("sharp");
const fs = require("fs");
const CleanCSS = require("clean-css");
const { minify } = require("terser");
const metagen = require("eleventy-plugin-metagen");

module.exports = (eleventyConfig) => {
   
    eleventyConfig.addPlugin(metagen);
    
    eleventyConfig.setTemplateFormats([
        "md",
        "njk"
    ]);

    markdownTemplateEngine: "njk";

    // Perform manual passthrough file copy to include directories in the build output _site
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("favicon_data");

    // Create css-clean CSS Minifier filter
    eleventyConfig.addFilter("cssmin", function(code) {
        // console.log(new CleanCSS({}).minify(code).stats);
        return new CleanCSS({}).minify(code).styles;
    });

    // Create terser JS Minifier async filter (Nunjucks)
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
    )   {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.log(`Terser error: ${err}`);
            // Fail gracefully
            callback(null, code);
        }
    });

    // Configure image in a template paired shortcode
    eleventyConfig.addPairedShortcode("image", (srcSet, src, alt, sizes="(min-width: 400px) 33.3vw, 100vw") => {
        return `<img srcset="${srcSet}" src="${src}" alt="${alt}" sizes="${sizes}" />`;
    });

    // Configure outgoing Pexels anchor elements in a template paried shortcode
    eleventyConfig.addPairedShortcode("link", (href, cls="image-link", rel="noopener", target="_blank", btnTxt="Pexels") => {
        return `<a class="${cls}" href="${href}" rel="${rel}" target="${target}">${btnTxt}</a>`;
    });

    /* This function accepts one 
    * parameter (an image) and will create
    * three resized images in the specified
    * format. (.jpg, .webp, etc)
    */
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
    // Make sure to comment or remove this function
    // call once you've created the images you need
    // as it will create new images on every build.
    
    //sharpImages("/images/bench-light.jpg");

    /* 
     Use https://squoosh.app/ for resizing images with more options
     sharpImages function creates 3 resized sharp versions of a specified image file
    */
    
    return {
        dir: {
            input: ".",
            output: "_site",
            layouts: "_includes/layouts",
            includes: "_includes",
        },
        templateFormats: ["md", "liquid", "njk"],
        passthroughFileCopy: true
    }
};