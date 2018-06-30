var gulp 				= require('gulp'),
		browserSync = require('browser-sync').create(),
		sass				= require('gulp-sass');


gulp.task('server', [reload-css], function() {
	browserSync.init({
      server: "./app"
  });
});


gulp.task('reload-css', function() {
	gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});