# Learning Eleventy - Stock Photo Gallery
This repo contains minimal markdown and a few stock images from [Pexels](https://pexels.com) to create a small photo gallery.

I would like to work on making this repo more of a "template" in the future. My hopes are that newcomers to 11ty can clone this repo and quickly get a stock photo gallery static site up and running. While also having the option to use Eleventy's [Data Cascade](https://www.11ty.dev/docs/data-cascade/) for merging data from multiple sources before actually rendering a template. 

# Getting started
## 1. Clone this Repository (SSH example)
`git clone git@github.com:tannerdolby/eleventy-stock-gallery.git`

- The above git command by default clones the repository into your root directory as a new folder named `eleventy-stock-gallery`. To specify a destination directory (ie my-gallery) use the follow syntax:
`git clone git@github.com:tannerdolby/eleventy-stock-gallery.git my-gallery`

## 2. Navigate to project folder
`cd-eleventy-stock-gallery` or `cd my-gallery`
* .eleventy.js is currently configured to use manual passthrough file copy to include `/images` and `/css` directories in the _site output. 

* Templating markdown engine used is [Nunjucks](https://mozilla.github.io/nunjucks/). This may be "barebones" so feel free to modify the .eleventy.js configuraton however you like.

## 3. Install dependencies (Eleventy is all this project needs)
`npm install`

## 4. Add any 12 photos (.jpg preferred) into the `/images` folder to create your own photo gallery or skip to step 5! 
If you choose to add your own photos, update the `_includes/layouts/base.njk` layout to include the appropiate `src` and `alt` attributes for the new images added. Also, within `/gallery` lives all of the markdown files for each image within the gallery. Update each featured image ie `/gallery/image-one/index.md` with the image data you added to `base.njk`. 

Updating the --formats flag to be ` --formats=md,jpg,png` inside `package.json` will tell eleventy to recognize images of .jpg and .png extension types.

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

## 5. Run Eleventy! 
To build your _site output

`npm run build`

To build your _site and serve it locally

`npm run --serve`

To run in debug mode

`npm run debug`

## Project notes
`/gallery` holds all of the markdown files for each gallery photo's details. Everything inside the /gallery folder uses the layout `feature.njk`.

`/_includes` houses the two templates for this project.

This demo project uses two layouts:
* _includes/layouts/base.njk: the home page template
* _includes/layouts/feature.njk: the featured image page template

## Motivations
An introduction to Eleventy with Jason Lengstrog and Zach Leatherman - [Lets Learn Eleventy](https://www.learnwithjason.dev/let-s-learn-eleventy)

# License
Free for open source and public use.
