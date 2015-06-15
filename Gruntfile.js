module.exports = function (grunt) {
    grunt.initConfig({
        scsslint: {
            files: [
                'scss/*.scss'
            ],
            options: {
                config: '.scss-lint.yml'
            }
        },

        jshint: {
            options: {
                jshintrc: true,
                force: false

            },

            all: ['check-controls-decorator.js']
        }
    });

    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['scsslint', 'jshint']);
};
