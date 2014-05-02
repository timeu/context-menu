(function () {

  'use strict';

  module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({

      vulcanize: {
        dist: {
          options: {
            inline: true,
            "excludes": {
              "imports": [ "nested-menu.html" ]
            }
          },
          files: {
            'dist/context-menu.html': 'context-menu.html'
          }
        }
      },
 
      copy: {
        dist: {
          files: [
            {src: 'LICENSE', dest: 'dist/LICENSE'},
            {src: 'README.md', dest: 'dist/README.md'}
          ]
        },
        demo: {
          files: [
            {src: 'LICENSE', dest: 'demo/LICENSE'},
            {src: 'dist/context-menu.html', dest: 'demo/context-menu.html'},
            {src: 'context-menu-screen-capture.gif', dest: 'demo/context-menu-screen-capture.gif'},
            {src: 'index.html', dest: 'demo/index.html'},
            {src: 'polymer/**', dest: 'demo/'}
          ]
        }
      },

      'gh-pages': {
        dist: {
          options: {
            base: 'dist',
            branch: 'master',
            message: 'auto-updating master from dev'
          },
          src: '**/*'
        },
        demo: {
          options: {
            base: 'demo',
            branch: 'gh-pages',
            message: 'auto-updating gh-pages from dev'
          },
          src: '**/*'
        }
      },

    });

    grunt.registerTask('dist', [
      'vulcanize:dist',
      'copy:dist',
      'gh-pages:dist',
      'copy:demo',
      'gh-pages:demo'
    ]);

    grunt.registerTask('default', ['dist']);

    grunt.file.mkdir( 'dist' );

  };

}());