---
title: About - Eleventy Photo Gallery Template
meta_desc: A page about John Smith, and photography. This template is currently the default version so add your own about me page info here.
url: https://eleventy-gallery.netlify.app/about
img: /images/highway-water-large.jpg
alt: Terrace outside shop window with green plants and pink tree on night street
eleventyNavigation:
  key: About
  order: 2
heading: About
permalink: "/about/"
layout: main.njk
---

<div class="about-me-content">

# {{ heading }}

Hi, I'm {{ site.author.firstName }} {{ site.author.lastName}}. I'm a novice photography and designer. This website acts as a compendium of images I've taken over the years. If you'd like to learn more about me, try [sending me an email](mailto:{{ site.author.email }}). 

This is mock text, write whatever you'd like for the about me page. Maybe add a picture or some of your recent work!

You can find me around the web at the following places:

<ul class="about-socials">
    <li><a href="{{ site.socials.github}}">GitHub</a></li>
    <li><a href="{{ site.socials.twitter }}">Twitter</a></li>
    <li><a href="{{ site.socials.linkedin }}">LinkedIn</a></li>
</ul>

<h2 id="contact-me">Contact</h2>

Feel free to reach out to me by email or on social media. I usually take 24-48hrs to respond. If you think my work aligns with your projects needs, I'd love to hear from you!

<form class="contact-form" onsubmit="sendMail()">
    <label for="name">What's Your Name?</label>
    <input type="text" name="name" id="name" required>
    <label class="form-label" for="subject">Subject</label>
    <input class="email-subject" type="text" name="subject" id="subject" required>
    <label class="form-label" for="message">Message</label>
    <textarea class="email-msg" rows="5" cols="30" name="message" id="message" required></textarea>
    <button type="submit" class="reach-me button submit-contact">Message me</button>
</form>

</div>