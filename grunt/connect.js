module.exports = function(grunt) {

  grunt.config('connect', {
      options: {
        port: 9000,
        livereload: 35729,
        // keepalive: true,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.live %>/'
          ]
        }
      },
  });


};
