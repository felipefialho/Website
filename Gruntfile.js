module.exports = function( grunt ) {

  // Paths
  var PathConfig = {
    dev: 'src/',
    dist: 'out/'
  };

grunt.initConfig({

  // Config path
  config: PathConfig,

  // Clean files
  clean: {
    dist: [
      '<%= config.dist %>/files/',   
      '<%= config.dist %>/**/stylus/'
    ]
  },

  // HTMLmin
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

  // imageMin
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
    
  // Watch
  watch : { 
    less: {
      files : [
      '<%= config.dev %>**/*.styl'
      ],
      tasks : ['stylus']
    }
  },

  // GZip Assets
  compress: {
    gzip: {
      options: {
        mode: 'gzip'
      },
      expand: true,
      cwd: '<%= config.dist %>assets/',
      src: ['**/*.css', '**/*.js'],
      dest: '<%= config.dist %>/assets/'
    }
  },


});

// Grunt plugins
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-stylus'); 
grunt.loadNpmTasks('grunt-contrib-watch');

// Tasks runnings
grunt.registerTask( 'build', ['htmlmin:dist', 'imagemin:dist', 'stylus', 'clean:dist'] );

// Watch
grunt.registerTask( 'w', [ 'watch' ] );

};