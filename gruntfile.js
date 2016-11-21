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
        src: 'index.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
            all: ['*.js']
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify','jshint']);

  

};