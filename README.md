## Website Performance Optimization portfolio project

The goal of this project was to improve the performance of an existing web
project, found
[here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

#### To view the project

Download/unzip or clone the project to your computer.

The repository contains both a source directory for development purposes (`src`)
and a production directory for deployment on the web (`dist`).

Open the file `index.html` within either `src` or `dist` in a browser.

#### Optimizations to `index.html`

The main page of the original project scored poorly on Google's PageSpeed
Insights development tool, on both mobile and desktop environments.

In order to improve the PageSpeed score to a value higher than 90%, a number
of changes have been made to `index.html`.  (The full set of optimizations
are visible in the `dist` directory.)

Optimizations are as follows:

1. Google analytics script has been made asynchronous.

1. A media attribute has been added so `css/print.css` will only be loaded when
printing is requested.

1. The web font is now loaded by Web Font Loader code placed at the
end of the document body.

1. Images are optimized.  The pizzeria image is optimized to a thumbnail size.
A larger optimized image is now used for `pizza.html`.  Image quality was
reduced somewhat to further shrink file sizes.  Software used: GIMP 2.8.

1. Images were further minified with the `grunt-contrib-imagemin` plug-in and
inlined as Base64 data with the `grunt-inline` plug-in.

1. CSS in `css/print.css` is minified, and CSS in `css/style.css` is both
minified and inlined using the `grunt-inline` plug-in.

1. HTML (including inlined JS) is minified with `grunt-contrib-htmlmin`.

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

1. minifying (removal of whitespace, comments) in the production version.

#### Optimizations to `views/pizza.html`

1. The optimized code in `dist/views/js/main.js` is minified and inlined.

1. External CSS resources are minified and inlined.

1. The pizzeria image has been minified with GIMP and the Grunt
`contrib-imagemin` plug-in.

#### Building the production version

Should you wish to modify the code of the source directory, you will need
to rebuild the production directory to see the optimized results of your
changes.

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
  npm install grunt-inline --save-dev
  npm install grunt-contrib-htmlmin --save-dev
  ```

1. Finally, type the following command into the terminal:

  `grunt`

  This will run the Grunt plug-ins and modify various files in the
  production directory.

1. Note that manual changes should be made only in the `src` directory to those
file touched by `Gruntfile.js`.  Running Grunt will overwrite any changes
you make to these files in the `dist` directory since it uses `src` as its
source.
