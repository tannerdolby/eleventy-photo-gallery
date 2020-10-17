# Contributing to eleventy-stock-gallery
I welcome any and all community contributions to this project. Feel free to open an issue or submit a PR for the addition of a new feature/modification.

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