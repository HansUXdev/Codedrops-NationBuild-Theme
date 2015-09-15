module.exports = function(grunt) {

  grunt.config('clean', {
		build: [
		'<%= config.build %>/*.html',
		],
		dev: [
		'src/css/**/*.css',
		'src/js/**/*.js',
		'src/scss/**/*.scss',
		],
		bower:[
		'vendor/**/*',
		]
  });


};
