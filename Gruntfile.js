module.exports = function (grunt) {


    grunt.initConfig({
        uglify:{
            my_target: {
                files:{
                    '_/js/script.js':['_/components/js/*.js']
                }
            }
        }, //uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    '_/components/js/es5script.js': '_/components/js/es6/script.js'
                }
            }
        }, //es6 compiler
        watch: {
            options:{livereload:true},
            scripts: {
                files:['_/components/js/es6/*.js'],
                tasks:['babel', 'uglify']
            }, //scripts
            html: {
                files:['*.html'],
            },
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks:['compass:dev']
            } //sass
        } //watch
    }); //initConfig

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['watch']);

}; //exports