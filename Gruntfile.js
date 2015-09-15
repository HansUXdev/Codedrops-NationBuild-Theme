module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    // vendor: grunt.file.readJSON('.bowerrc').directory,

    config: {
      mode: 'dev',

      live: 'src',
      src: 'src',
      sass: '<%= config.src %>/scss/',
      css: '<%= config.src %>/css',     
      ssg: 'www',
                  // This is the folder themesync watchs
                  // Download the themesync folder into root and switch the file name
      themesync: 'hansmcmurdydev-55f8466601925b6c54000001',
      build: 'build',
      //NB SRC files
      layouts: 'src/theme/layouts', //use this <%= config.layouts %>
      pages: 'src/theme/pages', 
      user: 'src/theme/user', 
      account: 'src/theme/account',
      misc: 'src/theme/misc', 
      include: 'src/theme/include', 
      
    },

  });

  require('load-grunt-tasks')(grunt);

  //Change grunt to dev if you dont want to use this theme. The copy task
  grunt.loadTasks('grunt');


  grunt.registerTask('clear',['clean']);

  // Use this to open up the static site.
  // Static site should be build in a www
  // grunt.registerTask('server', ['connect','watch']);


  // grunt.registerTask('setup',['clean','shell:bower','copy','sass']);


  grunt.registerTask('default', [
    'copy',
    // 'server'
  ]);


};