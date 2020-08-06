const sharp = require('sharp');
const fs = require('fs');
const directory = "./images/";

module.exports = (eleventyConfig) => {
   
    eleventyConfig.setTemplateFormats([
        "md"
    ]);

    markdownTemplateEngine: "njk";

    // Using manual passthrough file copy to include /images and /css in _site output
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    
    let resizeImgSmall = (fileName) => {
        let shortName = fileName.slice(0, fileName.length - 4);
        fs.readFileSync(fileName)
            sharp(`${fileName}`, { failOnError: false })
                .resize(320, 240)
                .toFile(`${shortName}-small.jpg`);
    };
    // resizeImgSmall("./images/shop-plants.jpg");

    let resizeImgMed = (fileName) => {
        let shortName = fileName.slice(0, fileName.length - 4);
        fs.readFileSync(fileName)
            sharp(`${fileName}`, { failOnError: false })
                .resize(640, 480)
                .toFile(`${shortName}-med.jpg`);
    };
    // resizeImgMed("./images/shop-plants.jpg");
    let resizeImgLarge = (fileName) => {
        let shortName = fileName.slice(0, fileName.length - 4);
        fs.readFileSync(`${fileName}`)
            sharp(`${fileName}`, { failOnError: false })
                .resize(1024, 768)
                .toFile(`${shortName}-large.jpg`);
    };
    // resizeImgLarge("./images/shop-plants.jpg");

};