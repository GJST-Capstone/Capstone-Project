module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  less: {
    development: {
      options: {
        paths: ["css"],
        cleancss: true,
      },
      files: {
        "public/css/style.css": "theme/style.less",           
      }
    },
  },
  watch: {
    options: {
      dateFormat: function(time) {
        grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
        grunt.log.writeln('Waiting for more changes...');
      },
    },
    css: {
      // We watch and compile less files as normal but don't live reload here
      files: ['**/*.less'],
      tasks: ['less'],
    },
  },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
};