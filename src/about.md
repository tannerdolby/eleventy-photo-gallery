---
eleventyNavigation:
  key: About
  order: 2
heading: About
permalink: "/about/"
layout: about.njk
---

# {{ heading }}

Hi, I'm {{ site.author.firstName }} {{ site.author.lastName}}. I'm a novice photography and designer. This website acts as a compendium of images I've taken over the years. If you'd like to learn more about me, try [sending me an email](mailto:{{ site.author.email }}). 

This is mock text, write whatever you'd like for the about me page. Maybe add a picture or some of your recent work!

## Contact
You can find me around the web at the following places:

<ul class="about-socials">
    <li><a href="{{ site.socials.dribbble }}">Dribbble</a></li>
    <li><a href="{{ site.socials.twitter }}">Twitter</a></li>
    <li><a href="{{ site.socials.linkedin }}">LinkedIn</a></li>
</ul>