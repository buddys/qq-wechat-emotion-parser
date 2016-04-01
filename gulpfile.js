var gulp = require('gulp');
var concat = require('gulp-concat');
var wrap = require("gulp-wrap");
var merge = require('gulp-merge');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');

gulp.task('objectify-json', function() {
    return gulp.src('./src/emotions.json')
        .pipe(wrap('window._qqWechatEmotionParser.emotion_map=<%= contents %>;'))
        .pipe(rename('emotions.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean-tmp', ['production-js'], function(){
    return gulp.src('./dist/emotions.js', {read: false})
		.pipe(clean());
});

gulp.task('production-js', ['objectify-json'], function() {
    var srcs = ['./src/window.js', './dist/emotions.js', './src/trie.js',
        './src/qq-wechat-emotion-parser.js'
    ];
    srcs = srcs
        .map(src => gulp.src(src))
        .map(src => src.pipe(wrap('\n!function(){<%= contents %>}();')));

    return merge.apply(null, srcs)
        .pipe(concat('qq-wechat-emotion-parser.js'))
        .pipe(jsmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test', function(){
    return gulp.src('test/*', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('dist', ['production-js', 'clean-tmp']);
gulp.task('default', ['test']);
