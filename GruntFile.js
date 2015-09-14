module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    buster: {
      test: {
        server: {
          port: 1112,
        },
        test: {
          config: 'test/buster.js',
        },
      },
    },

    browserify: {
      build: {
        src: 'lib/helper.js',
        dest: 'build/<%= pkg.name %>.js'
      },
      options: {
        standalone: 'fruitmachineFTDOMDelegate'
      }
    },

    uglify: {
       build: {
         src: 'build/<%= pkg.name %>.js',
         dest: 'build/<%= pkg.name %>.min.js'
       }
     }

  });

  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['browserify', 'uglify']);
};
