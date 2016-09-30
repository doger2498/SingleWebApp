'use strict'

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    rename = require('gulp-rename'),
    del = require('del');

var config = require('./webpack.config.js');

/** 
 *  清理生产目录文件
 *  当clean执行完成时，调用cb(),此时运行webpack task
 */
gulp.task('clean', function(cb) {
    del(['./dist/**']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});


/** 
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
    webpack(config, cb)
});

/** 
 *  压缩css文件
 */ 
gulp.task('style',function() {
    gulp.src('./dist/style.css')
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

/** 
 *  移动html文件
 */ 
gulp.task('html',function() {
    gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});


/** 
 *  压缩js文件
 */
gulp.task('script',function(){
    gulp.src('./dist/*.js')
    // .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
                                                                                                
gulp.task('build', ['webpack'], function() {
    console.log(process.env.NODE_ENV);
    gulp.start('style','script')
})

gulp.task('dev', ['clean'], function() {
    gulp.start('html');
})
