# 11ty-photo-gallery

A starter site for creating your own photo or art gallery using the [Eleventy](https://github.com/11ty/eleventy) static site generator.

* [Live demo](https://11tygallery.netlify.app/) - View the project live
* [Deploy on Netlify](https://app.netlify.com/) - host your own custom gallery

## Features 🌟
- Responsive and optimized images using `<picture>`
- Home page with CSS Grid representing gallery of images
- Featured image page
- About me page

## Contributing 🧡
Feel free to contribute to this project by suggesting a new feature or modification. I built this template for others to use, so let me know what you'd like to see added/modified. 

- See a problem or have a suggestion? Open an [issue](https://github.com/tannerdolby/11ty-photo-gallery)
- Take a look at [CONTRIBUTING.md](https://github.com/tannerdolby/11ty-photo-gallery/blob/master/CONTRIBUTING.md)

## Getting started

### 1. Clone this Repository
```
git clone https://github.com/tannerdolby/11ty-photo-gallery.git
```

### 2. Navigate to project folder
```
cd 11ty-photo-gallery
``` 

### 3. Install dependencies
```
npm install
```

### 4. Add your own photos or skip to step 5! 
Edit `_data/gallery.json` to include the appropiate image metadata for new images added. See [CONTRIBUTING.md](https://github.com/tannerdolby/11ty-photo-gallery/blob/master/CONTRIBUTING.md) for more on customizing your own photo/art gallery.

### 5. Run Eleventy! 
To build your _site output

```
npm run build
```

To build your _site and serve it locally

```
npm run serve
```

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

### Notes
The eleventy configuration file, `.eleventy.js` is currently configured to use manual passthrough file copy to include the following directories in the `_site` output. 

- `/images/`
- `/css/`
- `/favicon_data/`
- `/js/` 

The `/_includes/` directory houses the two layouts for this project.

- `_includes/layouts/base.njk`: home page template
- `_includes/layouts/feature.njk`: featured image page template

## Maintainer
[@tannerdolby](https://github.com/tannerdolby)
