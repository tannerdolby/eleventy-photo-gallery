# Contributing

I welcome any and all community contributions to this project. Feel free to open an issue or submit a PR. I'd love to hear about any features or modifications you think the project should have. If you need more info about a feature or want to discuss things, feel free to open an issue with the `education` label. 

## Setup

1. Clone this Repository: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`

2. Navigate to project folder: `cd eleventy-photo-gallery`

3. Install dependencies: `npm install`

4. Update `_data/gallery.json` to include the appropiate image metadata for new images added. The fields after `linkToAuthor` must be provided in order to use the `respimg` utility for transforming images at build-time.

```json
[
    {
        "title": "Terrace with green plants on night street",
        "date": "October 20, 2020",
        "credit": "Photo by Aldiyar Seitkassymov",
        "linkToAuthor": "https://www.pexels.com/photo/terrace-with-green-plants-on-night-street-3100835/",
        "src": "terrace-window.jpg",
        "alt": "Terrace outside shop window with green plants and pink tree on night street",
        "imgDir": "./images/",
        "widths": {
            "small": 320,
            "med": 640,
            "large": 1024
        },
        "sizes": "(min-width: 450px) 33.3vw, 100vw",
        "class": "my-img",
        "width": 1024,
        "height": 768
    }
]
```

If you don't need unique `class`, `width`, and `height` attributes, then simply use the shortcode like this:

```
{% for image in gallery %}
    {% respimg 
        image.src,
        image.alt,
        image.imgDir,
        image.widths,
        image.sizes,
        "showcase-img",
        "1024",
        "768"
    %}{% endrespimg %}
{% endfor %}
```

## Add new photos to the gallery
1. Get an image from somewhere (your file system, a stock photo website, etc)
2. Add the original image to the `/images/` folder.
3. Utilize `respimg` for transforming images.
4. This creates resized and reformatted `.jpeg` and `.webp` images from the original, which outputs to the `/images/` folder and generates responsive image markup using `<picture>` in the template where the shortcode was used.

## Run Eleventy! 
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

### Sources of Data
* Global Data Files: 
    * `_data/gallery.json` - Holds all image metadata
    * `_data/site.json` - Some site data

### Inline Minified CSS & JS
- Packages used:
    - CSS Minifier - [clean-css](https://github.com/jakubpawlowicz/clean-css)
    - JS Minifier - [terser](https://github.com/terser/terser)

### HTML Validator
All `.html` files have been validated using the [Nu HTML Checker](https://validator.w3.org/).