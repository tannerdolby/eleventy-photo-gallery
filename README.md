# Eleventy Photo Gallery

A starter site for creating your own photo or art gallery using the [Eleventy](https://github.com/11ty/eleventy) static site generator.

- [Live demo](https://eleventy-gallery.netlify.app/) - View the project live
- [Deploy on Netlify](https://app.netlify.com/) - Host your own custom gallery

## Getting Started
Quickly generate a highly performant photo gallery from this template by clicking the green [Use Template](https://github.com/tannerdolby/eleventy-photo-gallery/generate) button. Creating a template repository provides the same directory structure and files as the original project.

## Features 
- Build-time image transformations and responsive image markup in templates using [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- High performance and scalable site with 100s across the board on each page using [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Check it out on the [Eleventy Leaderboards](https://www.11ty.dev/speedlify/eleventy-gallery-netlify-app/)
- Document metadata populated for social share functionality via [eleventy-plugin-metagen](https://github.com/tannerdolby/eleventy-plugin-metagen)
- Home page with CSS grid displaying the gallery of images
- Featured image pages with pagination
- Gallery page
- About me page
- CSS preprocessor SCSS

## Local Setup
1. Clone this repo: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`
2. Navigate to your local copy of the project: `cd eleventy-photo-gallery`
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Serve locally: `npm run start` or `npm run dev`

## Usage
Add images to a folder such as `images` in your project and then supply an array of image metadata objects in a global data file `_data/gallery.json`:

```json
{
    "title": "Highway covered in water",
    "date": "October 20, 2020",
    "credit": "Photo by Josh Hild",
    "linkToAuthor": "https://www.pexels.com/photo/highway-covered-in-water-2524368/",
    "src": "highway-water.jpg",
    "alt": "Skybridge over highway covered in water",
    "imgDir": "/images/"
}
```

Once the image data is supplied within the global data file `_data/gallery.json` then the home page gallery images and featured image pages will display responsive images with `<picture>` using `@11ty/eleventy-img`.

If you don't want to use a [global data file](https://www.11ty.dev/docs/data-global/) simply define the image metadata elsewhere such as in your templates front matter or directly inside the `img` shortcode.

### Creating responsive images in templates

1. Get a large image from somewhere (your file system, a stock photo website, etc)
2. Add the original image to the `src/images/` folder (or a folder of your choice)
3. Use the `img` shortcode to generate responsive image markup using `<picture>`
4. This performs image transformations at build-time, creating varying image dimensions in the specified formats (`.jpg`, `.webp`, etc) from the original image, which outputs to the specified `outputDir` in the `img` shortcode within `.eleventy.js`

```js
{% img 
    src="car.jpg",
    alt="A photo of a car",
    sizes="(max-width: 450px) 33.3vw, 100vw",
    className="my-img",
%}
```

## Compiling SCSS to CSS
All of the projects CSS is compiled from Sass at build-time. The main SCSS file is `src/_includes/sass/style.scss` and thats where partials, mixins, and variables are loaded in with `@use` rules. 

If you want to change up the styles, you can write directly in `style.scss` for the changes to be compiled and used. 

<details>
<summary>
Otherwise, if you want to continue using a "modular" approach with separate SCSS files. You follow these steps:
</summary>

1. Create a new partial file in a specific directory ('sass/partials', 'sass/mixins', 'sass/vars') like `_some-file.scss` where the underscore prefixed at the beginning signals that the file is a [partial](https://sass-lang.com/documentation/at-rules/use#partials). These files are meant to be loaded as modules and not directly compiled.

2. Write Sass code and style away!

3. Load the stylesheets with a `@forward` rule in the [index files](https://sass-lang.com/documentation/at-rules/use#index-files) like `@forward "./some-file";` within `_index.scss` within the directory so they can be loaded with `@use` in the scss file that is compiled to CSS.

4. Load the stylesheets using `@use` rules from the directory in which you need a specific file. Therefore, if I created a new file within `sass/mixins` called `_url-short.scss` and wanted to load that file in `style.scss`, I would use `@use "mixins" as *` to load the stylesheets within the `mixins` directory as one module while also ensuring the module isn't loaded with a namespace.

_Read more about loading members and namespaces here in [Sass docs](https://sass-lang.com/documentation/at-rules/use#loading-members)_

</details>

## Contributing 
Feel free to report any issues and submit feature requests. I built this template for others to use so don't hesitate to let me know what you'd like to see added or modified.

- Open an [issue](https://github.com/tannerdolby/11ty-photo-gallery/issues) for any bugs or feature requests! 
- Have a look at the [contributing guidelines](https://github.com/tannerdolby/11ty-photo-gallery/blob/master/CONTRIBUTING.md) before submitting a PR!
