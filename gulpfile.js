var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test1', function () {
    return gulp.src(['test/reversePolish.js'], { read: false })
        .pipe(mocha({
            reporter: 'nyan',
            compilers: 'js:babel-core/register'
        }));
});

gulp.task('test2', ['test1'], function () {
    return gulp.src(['test/8queen.js'], { read: false })
        .pipe(mocha({
            reporter: 'nyan',
            compilers: 'js:babel-core/register'
        }));
});

gulp.task('default',['test2']);