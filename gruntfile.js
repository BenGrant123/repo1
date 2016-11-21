module.exports = function(grunt) {

   // Load the plugin that provides the task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
                  files: grunt.file.expandMapping(['index.js','app/app.js'], '/', {
                        rename: function(destBase, destPath) {
                              return destBase+destPath.replace('.js', '.min.js');
                        }
                  })
          }
    },
    jshint: {
            all: ['index.js','app/app.js']
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify','jshint']);

  

};