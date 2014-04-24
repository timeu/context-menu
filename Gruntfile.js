(function () {
  'use strict';
  module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-vulcanize');

    grunt.initConfig({

      shell: {
        mkbuild: {
          command: 'mkdir dist'
        }
      },

      vulcanize: {
        dist: {
          options: {
            inline: true
          },
          files: {
            'dist/floating-menu.html': 'floating-menu.html'
          }
        }
      },

    });

    // grunt.registerTask('micro', [
    //   'copy',
    //   'useminPrepare',
    //   'concat',
    //   'cssmin',
    //   'uglify',
    //   'wrap',
    //   'usemin',
    //   'htmlmin',
    //   'vulcanize'
    // ]);

    grunt.registerTask('dist', [
      'shell:mkbuild',
      'vulcanize:dist',
      // 'htmlmin:dist'
    ]);

    grunt.registerTask('default', ['dist']);

  };
}());