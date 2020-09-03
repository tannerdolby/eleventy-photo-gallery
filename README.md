# eleventy-stock-gallery
A starter repository intended to help you build a photo gallery website using the [Eleventy](https://github.com/11ty/eleventy) static site generator.

### Live Demo
* [Netlify demo](https://11tygallery.netlify.app/) - live template gallery
* [Deploy on Netlify](https://app.netlify.com/) - host your own custom gallery

## Getting started
### 1. Clone this Repository
```
git clone https://github.com/tannerdolby/eleventy-stock-gallery.git
```

### 2. Navigate to project folder
```
cd eleventy-stock-gallery
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

## 5. Run Eleventy! 
To build your _site output

```
npm run build
```

To build your _site and serve it locally

```
npm run --serve
```

To run in debug mode

```
npm run debug
```

### Sources of data
* Global Data File: `_data/gallery.json`

### Project notes
* `.eleventy.js` is currently configured to use manual passthrough file copy to include the `/images`, `/css`, and `/favicon_data` directories in the _site output. 

* `/_includes/` houses the two layouts for this project.

    * `_includes/layouts/base.njk`: home page template

    * `_includes/layouts/feature.njk`: featured image page template
