module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    // vendor: grunt.file.readJSON('.bowerrc').directory,

    config: {
      // This should switch grunt.loadTasks('<%= config.mode %>') from dev to grunt
      // allowing you to easily switch between copying your current theme 
      // from theme-sync and into a src/**/* for easy file management
      // and to grunt which is intended to do the opposite, watch the files and copy into the themesync folder...
      mode: 'dev',

      live: 'src',
      src: 'src',
      sass: '<%= config.src %>/scss/',
      css: '<%= config.src %>/css',     
      ssg: 'www',
                  // This is the folder themesync watchs
                  // Download the themesync folder into root and switch the file name
      themesync: 'hansmcmurdydev-55f8466601925b6c54000001',
      build: 'build', // set this = to config.themesync when production copy task is complete
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