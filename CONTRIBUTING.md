# Contributing

I welcome any and all community contributions to this project. Feel free to open an issue or submit a PR. I'd love to hear about any features or modifications you think the project should have. If you need more info about a feature or want to discuss things, feel free to open an issue with the `education` label. 

## Setup

1. Clone this Repository: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`

2. Navigate to project folder: `cd eleventy-photo-gallery`

3. Install dependencies: `npm install`

4. Add your own photos by editing `_data/gallery.json` to include the appropiate image metadata for new images added. 

```json
[
    {
        "title": "Terrace with green plants on night street",
        "date": "October 20, 2020",
        "credit": "Photo by Aldiyar Seitkassymov",
        "linkToAuthor": "https://www.pexels.com/photo/terrace-with-green-plants-on-night-street-3100835/",
        "imageData": {
            "alt": "Terrace outside shop window with green plants and pink tree on night street",
            "large": {
                "webp": "/images/shop-plants-large.webp",
                "jpg": "/images/shop-plants-large.jpg",
                "width": "1024w"
            },
            "medium": {
                "webp": "/images/shop-plants-med.webp",
                "jpg": "/images/shop-plants-med.jpg",
                "width": "640w"
            },
            "small": {
                "webp": "/images/shop-plants-small.webp",
                "jpg": "/images/shop-plants-small.jpg",
                "width": "320w"
            }
        }
    }
]
```

## 5. Run Eleventy! 
- Build: `npm run build`
- Serve locally: `npm run serve`
- Debug: `npm run debug`

## Submitting changes

1. Create a new branch or simply push from `master`: `git checkout -b <branch>`
2. Add changes to staging area: `git add <filename>` or to add everything thats been changed `git add .`
3. Commit changes: `git commit -m "Commit message"`
4. Push changes: `git push -u origin master` 
5. Open a PR and wait for changes to be reviewed.

## Closing Remarks
Thank you for all of your help and contributions! 🚀

### Notes (Not necessary to read in order to contribute)
The eleventy configuration file, `.eleventy.js` is currently configured to use manual passthrough file copy to include the following directories in the `_site` output. 

- `/images/`
- `/css/`
- `/favicon_data/`
- `/js/` 

The `/_includes/` directory houses the two layouts for this project.

- `_includes/layouts/base.njk`: home page template
- `_includes/layouts/feature.njk`: featured image page template

### Sources of Data
* Global Data Files: 
    * `_data/gallery.json` - Holds all image metadata
    * `_data/site.json` - Some site data
    * `_data/speedlify.js` - Speedlify API data files (static API with cached speedlify instance generated JSON)

### Inline Minified CSS & JS
- Packages used:
    - CSS Minifier - [clean-css](https://github.com/jakubpawlowicz/clean-css)
    - JS Minifier - [terser](https://github.com/terser/terser)

### HTML Validator
All `.html` files have been validated using the [Nu HTML Checker](https://validator.w3.org/).