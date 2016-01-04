## Website Performance Optimization portfolio project

The goal of this project is to improve the performance of an existing web
project, found
[here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

#### To view the project

Download/unzip or clone the project to your computer.

The repository contains both a source directory for development purposes
(`src`) and an optimized production directory for deployment on the web
(`dist`).

You can view the project in a browser by opening the file `index.html` in
either the `src` or `dist` directories.

Testing the project with [Google's PageSpeed Insights]
(https://developers.google.com/speed/pagespeed/insights/) requires that
the site be accessible through a public URL.  You may obtain a secure URL by
running a local server, navigating to the server in a browser, and running
[ngrok](https://ngrok.com/).  More detailed instructions are available in Part
1 of the README of the [original project]
(https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

#### Optimizations to `index.html` and other HTML files

The main page of the original repository scores poorly on Google's PageSpeed
Insights development tool, in both mobile and desktop environments.  In order
to improve the PageSpeed score to a value higher than 90%, a number of changes
have been made to `index.html` and the resources it uses.

Though `index.html` is the focus of the first part of this project,
optimizations have been applied to all HTML files and relevant resources.  Key
tasks have been automated with Grunt.

Optimizations are fully visible in the `dist` directory.

Optimizations to HTML files/resources and `index.html` in particular are as
follows:

1. Google analytics script has been made asynchronous in `index.html` and
other files where it is referenced.  Where omitted, `async` has been added
to `js/perfmatters.js` links.

1. A media attribute has been added to `css/print.css` links in `index.html`
and other HTML files.  Thus, it will only be loaded when printing is
requested.

1. The web font is now loaded asynchronously in `index.html` by [Web Font
Loader code](https://github.com/typekit/webfontloader) placed at the end of
the document body.

1. The pizzeria image is optimized to a thumbnail size for use in `index.html`.
Consequently, a larger optimized image is now used for `pizza.html`.  Image
quality for pizzeria images is reduced somewhat to shrink file sizes further.
Software used: GIMP 2.8.

1. All images (including the resized/compressed pizzeria images described
above) have been minified with the `grunt-contrib-imagemin` plug-in.

1. Two images were inlined as Base64 data in `index.html` with the
`grunt-inline` plug-in.  (The pizzeria image was also inlined as data in
`pizza.html`.)

1. All JS files have been uglified (mangled and minified) with the
`grunt-contrib-uglify` plug-in.

1. All CSS has been minified with the `grunt-contrib-cssmin` plugin.

1. CSS other than print-only is inlined in every HTML file using the
`grunt-inline` plug-in.

1. All HTML (including inlined JS) is minified with `grunt-contrib-htmlmin`.

#### Optimizations to `views/js/main.js`

Due to inefficient code in this file, the performance of the original pizzeria
page `pizza.html` lagged behind a refresh rate of 60 frames per second, and
resizing of the pizza images was sluggish.

The main optimizations involve reducing assets, caching where possible, and
avoiding expensive operations within loops.

Below is a summary of changes.  More information on optimization is found in
code comments added to `src/views/js/main.js`.  (Note that these are absent
in the further optimized version in the `dist` directory.)

Changes include the following:

1. moving cachable information outside of the for-loops used in resizing
menu pizza images, updating the positions of animated background pizzas, and
initially creating menu items.

1. creating only as many background pizzas as are needed to fill the screen.
For typical media, we need considerably fewer images than the original 200.

1. storing references to the background pizzas in an array.  We now don't
have to search the DOM for them each time we update their positions during
scrolling.

1. using a single pizza as a representative when resizing with the slider.
Thus, calculations can be done once instead of 100 times.

1. using faster methods to search the DOM.  We favor `getElementById` and
`getElementsByClassName` over `querySelector` and `querySelectorAll`.

1. uglifying (mangling and minifying) and inlining code in the production
version.

#### Building the production version

Should you wish to modify the code of the source directory, you will need
to rebuild the production directory to see the optimized results of your
changes.

Steps to follow:

1. In order to build the project, we use various [Grunt](http://gruntjs.com/)
plug-ins.  Grunt requires Node.js, so you may need to
[install it](https://nodejs.org/en/).

1. In the terminal, navigate to the root directory of the project and type

  `npm install`

  (This creates a new folder called `node_modules`.)

1. Install the Grunt command-line interface (Grunt CLI) with this command:

  `npm install -g grunt-cli`

1. Install the Grunt plug-ins used to build the project:

  ```
  npm install grunt-contrib-imagemin --save-dev
  npm install grunt-contrib-uglify --save-dev
  npm install grunt-contrib-cssmin --save-dev
  npm install grunt-inline --save-dev
  npm install grunt-contrib-htmlmin --save-dev
  ```

1. Finally, type the following command into the terminal:

  `grunt`

  This will run the Grunt plug-ins, creating the `dist` directory in the
  process (if it does not already exist).

Important: Manual changes should be made only to files in the `src` directory.
Running Grunt will overwrite any changes you make to these files in the `dist`
directory, since Grunt uses `src` as its source.
