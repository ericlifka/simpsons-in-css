module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        cssmin:
            combine:
                files:
                    'bin/jquery.simpsons.css': ['css/*.css', '!css/normalize.css']

        coffee:
            compile:
                files:
                    'bin/jquery.simpsons.js': 'coffee/jquery.simpsons.coffee'

    grunt.loadNpmTasks 'grunt-contrib-cssmin'
    grunt.loadNpmTasks 'grunt-contrib-coffee'

    grunt.registerTask 'default', ['cssmin', 'coffee']
