# Eleventy Photo Gallery

A starter site for creating your own photo or art gallery using the [Eleventy](https://github.com/11ty/eleventy) static site generator.

- [Live demo](https://eleventy-gallery.netlify.app/) - View the project live
- [Deploy on Netlify](https://app.netlify.com/) - Host your own custom gallery

## Getting Started
1. Clone this repo: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`
2. Navigate to your local copy of the project: `cd eleventy-photo-gallery`
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Serve locally: `npm run serve`

## Features ✨
- Responsive and optimized images using `<picture>`
- Home page with CSS Grid representing gallery of images
- Featured image page
- About me page

## Usage 

🚧Working to automate this... stay tuned 🚧

Edit `_data/gallery.json` to include the appropiate image metadata. See [CONTRIBUTING.md](https://github.com/tannerdolby/eleventy-photo-gallery/blob/master/CONTRIBUTING.md) for more on customizing your own photo/art gallery.

Use the `sharpImages` function inside `.eleventy.js` to create three resized versions of the original image.

1. Get an image from somewhere (your file system, a stock photo website, etc)
2. Add the original image to the `/images/` folder.
3. Go into `.eleventy.js` and utilize `sharpImages`
4. This creates three resized images from the original, which outputs to the `/images/` folder:

```
sharpImages("./images/road-fog.jpg");
```

``` 
road-fog-large.webp
road-fog-med.webp
road-fog-small.webp
```

5. Include the images in `/images/` if you create the resized images externally.
6. Go into `_data/gallery.json` and create a new object with the image metadata

See [CONTRIBUTING.md](https://github.com/tannerdolby/eleventy-photo-gallery/blob/master/CONTRIBUTING.md) for more on customizing the image gallery.

### More options for image optimization
* [Squoosh](https://squoosh.app/) - Make images smaller using best-in-class codecs, right in the browser.
* [eleventy-img](https://github.com/11ty/eleventy-img) - Utility to perform build-time image transformations.

## Contributing 
Feel free to contribute to this project by suggesting a new feature or modification. I built this template for others to use, so let me know what you'd like to see added/modified. 

- Open an [issue](https://github.com/tannerdolby/11ty-photo-gallery/issues) for any features/modifications you'd like to see! 
- Have a look at the [contributing guidelines](https://github.com/tannerdolby/11ty-photo-gallery/blob/master/CONTRIBUTING.md) before submitting a PR!

## Maintainer
[@tannerdolby](https://github.com/tannerdolby)

## License 
This project is under the [MIT](https://github.com/tannerdolby/eleventy-photo-gallery/blob/master/LICENSE) license.
