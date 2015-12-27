module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            target: {
                files: {
                    'dist/img/profilepic.jpg': 'src/img/profilepic.jpg',
                    'dist/views/images/pizzeria_small.jpg': 'src/views/images/pizzeria_small.jpg',
                    'dist/views/images/pizzeria_large.jpg': 'src/views/images/pizzeria_large.jpg'
                }
            }
        },

        inline: {
            target: {
                options:{
                    cssmin: true,
                    // uglify: true,
                    tag: ''
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        htmlmin: {
            target: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('default', ['imagemin', 'inline', 'htmlmin']);  
};
