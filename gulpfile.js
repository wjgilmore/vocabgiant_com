var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var gulp_param = require('gulp-param')(require('gulp'), process.argv);
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('lint', function() {  
  return gulp.src('src/*')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build-less', function(){
  return gulp.src(['src/css/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('build', function(watch) {  

	var browsifier = browserify({
		entries: ['src/App.jsx'],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {}
	}).transform(babelify);

	function rebundle() {
		browsifier.bundle()
		  .on('error', function(err) { gutil.log(err); this.emit('end'); })
	      .pipe(source('app.js'))
	      .pipe(gulp.dest('public'));
	}

	if (watch) {
		var bundle = watchify(browsifier);
		browsifier.on('update', function() {
		  gutil.log('Rebundling...');
		  rebundle();
		});
	}

	rebundle();

});