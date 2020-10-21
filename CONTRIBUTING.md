# Contributing

I welcome any and all community contributions to this project. Feel free to open an issue or submit a PR for any features or modifications you'd like to see the project have. If you need more info about a feature or want to discuss things, feel free to open an issue with the `education` label. 

## Setup

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
Edit `_data/gallery.json` to include the appropiate image metadata for new images added. 

#### Serving responsive images
Use the `sharpImages` function inside `.eleventy.js` to create three resized versions of the original image.

```
sharpImages("./images/road-fog.jpg");
```

``` 
# Output to /images/ directory
road-fog-large.jpg
road-fog-med.jpg
road-fog-small.jpg
```

#### More options for image optimization
* [Squoosh](https://squoosh.app/) - Make images smaller using best-in-class codecs, right in the browser.
* [eleventy-img](https://github.com/11ty/eleventy-img) - Utility to perform build-time image transformations.

## 5. Run Eleventy! 
To build your _site output

```
npm run build
```

To build your _site and serve it locally

```
npm run serve
```

To run in debug mode

```
npm run debug
```

## Submitting changes

1. Create a new branch or simply push from `master`.
```
git checkout -b <branch>
```
2. Commit your file changes and push
```
git push <branch> <remote>
```
3. Open a PR and wait for changes to be reviewed.

## Closing Remarks
Thank you for all of your help and contributions! 🚀

## Notes
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