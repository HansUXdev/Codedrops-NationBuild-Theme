module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files:[
        '<%= config.live %>/**/*.html',
        '<%= config.live %>/css/{,*/}*.css',
        '<%= config.live %>/js/{,*/}*.js',
        '<%= config.live %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    },
    // 
    scss:{
      files:['<%= config.sass %>/**/*.scss'],
      tasks:['sass'],
    },

    // watch the html files in src/theme/layouts
    // then run copy:layoutFiles to copy the files into the themesync folder
    layoutFiles:{
      files:['<%= config.layouts %>/*.html'],
      tasks:['copy:layoutFiles'],
    },
    // watch the html files in src/theme/layouts
    // then run copy:layoutFiles to copy the files into the themesync folder
    pageFiles:{
      files:['<%= config.pages %>/*.html'],
      tasks:['copy:pagesFiles'],
    },
    userFiles:{
      files:['<%= config.user %>/*.html'],
      tasks:['copy:userFiles'],
    },
    accountFiles:{
      files:['<%= config.account %>/*.html'],
      tasks:['copy:accountFiles'],
    },
    miscFiles:{
      files:['<%= config.misc %>/*.html'],
      tasks:['copy:miscFiles'],
    },
    includeFiles:{
      files:['<%= config.include %>/*.html'],
      tasks:['copy:includeFiles'],
    },

  });


};
