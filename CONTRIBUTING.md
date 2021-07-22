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
        "widths": [320, 640, 1024],
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

- `./src/images/`
- `./src/css/`
- `./src/favicon_data/`
- `./src/js/` 

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

## Current Ranking on Speedlify

#4 (Top 5) - 07/22/2021 - https://www.11ty.dev/speedlify

![Eleventy Leaderboards](https://user-images.githubusercontent.com/48612525/126697505-92204180-5546-44d2-be42-8210c5d39ca6.png)

### Lighthouse Audit Scores 
As of July 7, 2021 12:24pm (PST)

#### Home page

![Home page Lighthouse Audit results](https://user-images.githubusercontent.com/48612525/126694878-8f42aad8-562e-4a76-bcc9-9feea3a9abdc.png)

#### Feature page

![Feature page Lighthouse Audit results](https://user-images.githubusercontent.com/48612525/126696957-714cad9e-f764-4318-b510-f5c5453f3a24.png)

#### Gallery Page

![Gallery page Lighthouse Audit results](https://user-images.githubusercontent.com/48612525/126696676-8c3bbc7d-9618-4cf6-accd-3b6172e7f2c1.png)

#### About Page

![About page Lighthouse Audit results](https://user-images.githubusercontent.com/48612525/126697060-3e00a210-9772-4f6f-9738-2126755a0639.png)
