(function () {

  'use strict';

  module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-remove');

    grunt.initConfig({

      vulcanize: {
        default: {
          options: {
            inline: true,
            "excludes": {
              "imports": [ "nested-menu.html" ]
            }
          },
          files: {
            'vulcanized.html': 'context-menu.html'
          }
        }
      },
 
      copy: {
        master: {
          files: [
            {src: 'vulcanized.html', dest: 'master/context-menu.html'},
            {src: 'LICENSE', dest: 'master/LICENSE'},
            {src: 'README.md', dest: 'master/README.md'},
            {src: 'bower.json', dest: 'master/bower.json'},
            {src: '.bowerrc', dest: 'master/.bowerrc'},
            {src: '../nested-menu/preview.png', dest: 'master/preview.png'}
          ]
        },
        'gh-pages': {
          files: [
            {src: 'vulcanized.html', dest: 'gh-pages/context-menu.html'},
            {src: 'LICENSE', dest: 'gh-pages/LICENSE'},
            {src: 'index.html', dest: 'gh-pages/index.html'},
          ]
        }
      },

      'gh-pages': {
        master: {
          options: {
            base: 'master',
            branch: 'master',
            message: 'auto-updating master from dev with grunt'
          },
          src: ['**/*','.bowerrc']
        },
        'gh-pages': {
          options: {
            base: 'gh-pages',
            branch: 'gh-pages',
            message: 'auto-updating gh-pages from dev with grunt'
          },
          src: '**/*'
        }
      },

      remove: {
        clean: {
          options: {
            trace: true
          },
          fileList: ['vulcanized.html'],
          dirList: ['master', 'gh-pages']
        } 
      }

    });

    grunt.registerTask('default', [
      'vulcanize:default',
      'copy:master',
      'copy:gh-pages',
      'gh-pages:master',
      'gh-pages:gh-pages',
      'remove:clean'
    ]);

  };

}());