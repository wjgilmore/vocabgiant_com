var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');

var source = require('vinyl-source-stream');

function compiler(watch) {

	var browsifier = browserify({
		entries: ['src/App.jsx'],
		extensions: ['.jsx'],
		debug: true,
		cache: {}, // discuss this and the next two
		packageCache: {}, 
		fullPaths: true
	});

	function bundler() {
		browsifier.bundle()
		  .on('error', function(err) { console.error(err); this.emit('end'); })
	      .pipe(source('app.js'))
	      .pipe(gulp.dest('public'));
	}

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }
 
  rebundle();

}

gulp.task('default', ['build']);