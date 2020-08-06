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
    

    // Resize and create a new file for all image files in the directory to sharp small (320w, 240w)s
    let resizeAllSmall = () => {
        fs.readdirSync(directory).forEach(file => {
            const n = 4;
            let clean = file.slice(0, file.length - n);
            sharp(`${directory}/${file}`, {failOnError: false})
                .resize(320, 240)
                .toFile(`${directory}/${clean}-small.jpg`);
        });
    }
    // resizeAllSmall();    
    
};