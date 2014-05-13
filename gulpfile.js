var gulp        = require('gulp'),
    include        = require('gulp-include'),
    coffee        = require('gulp-coffee');
    uglify = require('gulp-uglify');
    rename = require("gulp-rename");

gulp.task("scripts", function() {
    return gulp.src('src/mapkin.coffee')
        .pipe( include() )
        .pipe( coffee() )
        .pipe( gulp.dest("dist") )
});

gulp.task('uglify', ['scripts'], function() {
  gulp.src(['dist/*.js', '!dist/*min.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
        path.extname = ".min.js"
     }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ["scripts", "uglify"]);

gulp.task('watch', function() {
  gulp.watch("src/**", ["default"])
});
