# Eleventy Photo Gallery

A starter site for creating your own photo or art gallery using the [Eleventy](https://github.com/11ty/eleventy) static site generator.

- [Live demo](https://eleventy-gallery.netlify.app/) - View the project live
- [Deploy on Netlify](https://app.netlify.com/) - Host your own custom gallery

## Getting Started
Quickly generate a new photo gallery from this template by clicking the green [Use Template](https://github.com/tannerdolby/eleventy-photo-gallery/generate) button. Creating a template repository provides the same directory structure and files as the original project.

## Features 
- Responsive and optimized images using `<picture>`
- Home page with CSS Grid representing gallery of images
- Featured image page
- About me page
- Perform build-time image transformations and generate responsive image markup using the `respimg` paired shortcode.

## Local Setup
1. Clone this repo: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`
2. Navigate to your local copy of the project: `cd eleventy-photo-gallery`
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Serve locally: `npm run serve`

## Usage
Edit `_data/gallery.json` to include image metadata like this:

```
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
```

### Transforming Images
The `respimg` paired shortcode performs build-time image transformations and generates responsive image markup with `<picture>`. Once images are resized/transformed you can use them anywhere in your project, this plugin removes the need for users to resize images on their own.

Next, make sure to include the necessary parameters when using the `respimg` utility:

| Parameter | Description |
| ------    | -------     |
| src       | The filename for an image. |
| alt       | A text description of the image. |
| image directory | The directory where the image file is located. |
| widths    | The desired image widths. Supports any three integer values. |
| sizes     | The `sizes` attribute which defines a set of media conditions. |
| class     | Class name for the fallback image.   |
| width     | The fallback image `width` attribute.  |
| height    | The fallback image `height` attribute. |

#### Using the `respimg` utility

1. Get a large image from somewhere (your file system, a stock photo website, etc)
2. Add the original image to the `/images/` folder.
3. Use the `respimg` paired shortcode if you need to resize and reformat images.
4. This performs image transformations at build-time, creating varying image dimensions and `.jpg` plus `.webp` formats from the original image, which outputs to the `/images/` folder:

Using the paired shortcode for a single large image like this: 
```
{% respimg 
    "car.jpg",
    "A photo of a car",
    "./images/",
    { small: 320, med: 640, large: 1024 },
    "(min-width: 450px) 33.3vw, 100vw",
    "my-img",
    "1024",
    "768"
%}{% endrespimg %}
```
will generate responsive image markup using `<picture>` tags like this:
```
 <picture>
    <source 
        type="image/webp"
        srcSet="/images/car-large.webp 1024w,
                /images/car-med.webp 640w,
                /images/car-small.webp 320w"
        sizes="(min-width: 450px) 33.3vw, 100vw"
    >
    <img 
        srcSet="/images/car-large.jpg 1024w,
                /images/car-med.jpg 640w,
                /images/car-small.jpg 320w"
        sizes="(min-width: 450px) 33.3vw, 100vw"
        src="car-small.jpg"
        alt="A photo of a car"
        loading="lazy"
        class="my-img"
        width="1024"
        height="768"
    >
</picture>
```

If you have already transformed an image and wish to only generate the responsive image markup using `<picture>`, simply use the `respimg` shortcode again anywhere within your project. Read more on the [plugin docs](https://github.com/tannerdolby/eleventy-plugin-sharp-respimg#using-the-paired-shortcode-more-than-once-for-the-same-image).

### Transforming multiple images
You can also transform multiple images at build-time using [global data](https://www.11ty.dev/docs/data-global/) or [front matter](https://www.11ty.dev/docs/data-frontmatter/) to handle all image resizing and reformatting needs in one go using a `for` loop. 

Refer to [eleventy-plugin-sharp-respimg](https://github.com/tannerdolby/eleventy-plugin-sharp-respimg) documentation for more information on usage. 

## Contributing 
Feel free to contribute to this project by suggesting a new feature or modification. I built this template for others to use, so let me know what you'd like to see added/modified. 

- Open an [issue](https://github.com/tannerdolby/11ty-photo-gallery/issues) for any features/modifications you'd like to see! 
- Have a look at the [contributing guidelines](https://github.com/tannerdolby/11ty-photo-gallery/blob/master/CONTRIBUTING.md) before submitting a PR!

## Maintainer
[@tannerdolby](https://github.com/tannerdolby)

## License 
This project is under the [MIT](https://github.com/tannerdolby/eleventy-photo-gallery/blob/master/LICENSE) license.
