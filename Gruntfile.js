module.exports = function( grunt ) {

  // Paths
  var PathConfig = {
    dev: 'src/',
    dist: 'out/'
  };

grunt.initConfig({

  // Config path
  // ---------------------------------
  config: PathConfig,

  // Clean files
  // ---------------------------------
  clean: {
    dist: [
      '<%= config.dist %>/files/',   
      '<%= config.dist %>/**/stylus/'
    ]
  },

  // HTMLmin
  // ---------------------------------
  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: '<%= config.dist %>',
        src: ['*.html','**/*.html'],
        dest: '<%= config.dist %>',
      }],
    }
 },

  // ImageMin
  // ---------------------------------
  imagemin: {
    dist: {
      options: {
      optimizationLevel: 3
    },
    files: [{
        expand: true,
        cwd: '<%= config.dist %>',
        src: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
        dest: '<%= config.dist %>',
      }],
    }
  },

  // Stylus
  // ---------------------------------
  stylus: {
    compile: {
      options: { 
        urlfunc: 'data-uri'  
      }, 
      files: {
        '<%= config.dev %>files/assets/css/style.css': '<%= config.dev %>files/assets/stylus/style.styl'
      } 
    }
  },

  // Task: Agroup Media Querie
  // ---------------------------------
  cmq: {
    options: {
      log: true
    },
    dev: {
      files: {
        '<%= css_src %>': ['<%= config.dist %>/assets/css/style.css']
      }
    }
  },

  // Watch
  // ---------------------------------
  watch : { 
    less: {
      files : [
      '<%= config.dev %>**/*.styl'
      ],
      tasks : ['stylus']
    }
  },
 
});

// Grunt plugins
// ---------------------------------
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-stylus'); 
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-combine-media-queries');

// Tasks runnings
// ---------------------------------
grunt.registerTask( 'build', ['htmlmin:dist', 'imagemin:dist', 'stylus', 'cmq', 'clean:dist'] );

// Watch
// ---------------------------------
grunt.registerTask( 'w', [ 'watch' ] );

};