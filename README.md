## Overview
This repo is intended to extend Nation Builder Theme Development by using grunt with nationbuilders themesync program.

With that said, THIS IS HIGHLY UNSTABLE and I strongly discourage using grunt if you do not have experiance with it...

## TO-DO
1. Finish Theme...
2. Finalize grunt tasks


## Install
Make sure you have git, bower, grunt and sass installed

## Grunt Tasks still needed
1. grunt postcss 
	- compile sass
	- autoprefixer (pleeease) (for css variables?)
	(deal with sass media querie bubbles)
	- combine media queries
	- extract media queries into tablet-and-desktop.css file ()


## Test Grunt Tasks
(sudo on mac)
- npm install grunt-contrib-htmlmin --save-dev
- npm install grunt-combine-media-queries --save-dev
(combine js files for each page)
- npm install grunt-contrib-uglify --save-dev
(combine liquid files into static site for rapid proto-typing?)
- npm install --save-dev grunt-liquid








## Ideal Work Flow (not currently working)
1. NPM install (assuming you have node and grunt installed)
2. grunt local (to assemble a local static site from the liquid html)
3. grunt production 
(watch the files in the scr/theme folder and copies them into the folder hooked up to themesync, also do things nationbuilder doesn't do like minify html, post-process css with vendor prefixes, combine and extract media queries)






