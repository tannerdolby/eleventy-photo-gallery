module.exports = (eleventyConfig) => {
    eleventyConfig.setTemplateFormats([
        "md"
    ]);

    // Using manual passthrough file copy to include /images and /css in _site output
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    // Using Nunjucks for templating
    markdownTemplateEngine: "njk";


    // shortcode for increasing text size inside of markdown files
    eleventyConfig.addPairedShortcode('resize', (content, size) => {
        return `<span style="font-size: ${size}">${content}</span>`;
    });
    
};