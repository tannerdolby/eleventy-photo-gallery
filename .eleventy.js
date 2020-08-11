const sharp = require("sharp");
const fs = require("fs");

const Image = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
   
    eleventyConfig.setTemplateFormats([
        "md"
    ]);

    markdownTemplateEngine: "njk";

    // manual passthrough file copy to include /images and /css in _site output
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    // Use the sharpImages function to create 3 responsive sharp versions of a specified image file.
    function sharpImages(fileName) {
        let resizeImgSmall = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(fileName)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(320, 240)
                    .toFile(`${shortName}-small.jpg`);
        };
        resizeImgSmall();

        let resizeImgMed = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(fileName)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(640, 480)
                    .toFile(`${shortName}-med.jpg`);
        };
        resizeImgMed();
        
        let resizeImgLarge = () => {
            let shortName = fileName.slice(0, fileName.length - 4);
            fs.readFileSync(`${fileName}`)
                sharp(`${fileName}`, { failOnError: false })
                    .resize(1024, 768)
                    .toFile(`${shortName}-large.jpg`);
        };
        resizeImgLarge();
    }
    // Comment out or remove the the function call once you've created all the responsive images you need :)
    // sharpImages("./images/road-fog.jpg");
};