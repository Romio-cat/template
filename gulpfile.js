var gulp 				= require('gulp'),
		browserSync = require('browser-sync').create(),
		sass				= require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('app/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('server', ['sass'], function() {
	browserSync.init({
      server: "./app"
  });
  gulp.watch("app/sass/*.sass", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['server']);

