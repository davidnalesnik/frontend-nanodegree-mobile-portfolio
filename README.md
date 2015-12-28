The goal of this project was to improve the performance of an existing web
project, found here:
https://github.com/udacity/frontend-nanodegree-mobile-portfolio

To view the project

Download/unzip or clone the project to your computer.

The repository contains both a source directory for development purposes (`src`)
and a production directory for deployment on the web (`dist`).

Open the file `index.html` within either `src` or `dist` in a browser.

Optimizations to `index.html`

The main page of the original project scored poorly on Google's
`PageSpeed Insights` development tool.

The changes made to `index.html` to improve the `PageSpeed` score to a value
above 90% are as follows:

Google analytics script has been made asynchronous.

A media attribute has been added so `css/print.css` will only be loaded when
printing is requested.

The web font has been loaded by Web Font Loader code placed at the
end of the document body.

The pizzeria image is optimized to a thumbnail size.  A larger optimized image
is now used for `pizza.html`.  Image quality was reduced somewhat to further
shrink file sizes.  Software used: GIMP 2.8.

Images were further minimized with the `grunt-contrib-imagemin` plug-in and
inlined in a Base64 encoding with the `grunt-inline` plug-in.

CSS from `css/style.css` and `css/print.css` is minified and inlined
using the `grunt-inline` plug-in.

JavaScript code is inlined using `grunt-inline`.

HTML (including inlined JS) is minified with `grunt-contrib-htmlmin`.

Optimizations to `views/js/main.js`

Due to inefficient code, the performance of the pizzeria page (`pizza.html`)
lagged behind a refresh rate of 60 frames per second and resizing of the
pizzas was sluggish.

Optimizations to `views/js/main.js` are detailed in code comments added
to the version of that file in the `src` directory.

Note that this code has been minified and inlined in the version of
`pizza.html` in the production directory.

Building the production version

Should you wish to modify the code of the source directory, you will need
to rebuild the production directory.

In order to build the project, we use various Grunt plug-ins.

Grunt requires Node, so you will need to install Node.js on your computer, if
you don't already have it: https://nodejs.org/en/

In the terminal, navigate to the `src` directory and type

`npm install`

(This creates a new folder called `node_modules`.)

Install the Grunt command-line interface (GruntCLI) with this command:

`npm install -g grunt-cli`

Install the Grunt plug-ins used to build the project:

```
npm install grunt-contrib-imagemin --save-dev
npm install grunt-inline --save-dev
npm install grunt-contrib-htmlmin --save-dev
```

Finally, type the following command into the terminal:

`grunt`

This will run the Grunt plug-ins and modify various files in the
production directory.
