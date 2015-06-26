var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

function compiler(watch) {

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

}

function watch() {
  return compiler(true);
};
 
gulp.task('build', function() { return compiler(); });
gulp.task('watch', function() { return compiler(true); });