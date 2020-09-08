const CacheAsset = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
    let url = "https://tdspeedlify.netlify.app/api/urls.json"; // Grab the Speedlify instance generated data files
    let json = await CacheAsset(url, {
		duration: "1w",
        type: "json",
        directory: ".cache"
	});

	return json;
};