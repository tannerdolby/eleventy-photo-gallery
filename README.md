# eleventy-stock-gallery
A starter repository intended to help you build a photo gallery using the [Eleventy](https://github.com/11ty/eleventy) static site generator. My hopes are that newcomers to 11ty can clone this repo and quickly get a stock photo gallery static site up and running. 

### Live Demo
* [Netlify](https://determined-mclean-3dcc25.netlify.app/)

## Getting started
### 1. Clone this Repository (SSH example)
```
git clone git@github.com:tannerdolby/eleventy-stock-gallery.git
```

### 2. Navigate to project folder
```
cd-eleventy-stock-gallery
``` 

.eleventy.js is currently configured to use manual passthrough file copy to include `/images` and `/css` directories in the _site output. 

### 3. Install dependencies
```
npm install
```

### 4. Add your own photos or skip to step 5! 
Update the `_includes/layouts/base.njk` layout to include the appropiate `src` and `alt` attributes for the new images added. 

Also, within `/gallery` lives all of the markdown template files for each separate image page within the gallery. Update each featured image ie `/gallery/image-one/index.md` with the image data you added to `base.njk`. 

### How to add new images
1. Navigate to the `base.njk` file 
2. At the top of the file within the three opening and closing hypens (---)
3. Update the front matter image data for imageOne through imageTwelve to include the image path and alt text for the new photos.

```
---
imageOne:
    src: new_image_path.jpg
    alt: Descriptive text for image
imageTwo:
    src: new_image_two_path.jpg
    alt: Descriptive text for image

...

imageTwelve:
    src: new_image_twelve_path.jpg
    alt: Descriptive text for image

---
```
4. Make sure and update markdown files within `/gallery` to reflect the image metadata introducted into `base.njk` for new gallery images.

### Serving responsive images
Utilize the sharp package for creating three versions of the original image.

```
sharpImages("./images/road-fog.jpg");
```

Output: road-fog-small.jpg, road-fog-med.jpg, road-fog-large.jpg

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

### Project notes
`/gallery` holds all of the markdown template files and front matter for each image in the gallery. These templates are using the layout `feature.njk` by utilizing the directory data file `gallery.11tydata.json`.

`/_includes` houses the two layouts for this project.
- _includes/layouts/base.njk: the home page template
- _includes/layouts/feature.njk: the featured image page template

Templating markdown engine used is [Nunjucks](https://mozilla.github.io/nunjucks/)

### Sources of Data
Front matter data in a template - all of the `/gallery/.../index.md` files

Front matter data in layouts - `_includes/layouts/base.njk` and `_includes/layouts/feature.njk`