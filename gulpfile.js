var gulp        = require('gulp'),
    include        = require('gulp-include'),
    coffee        = require('gulp-coffee');

gulp.task("scripts", function() {
    gulp.src('src/mapkin.coffee')
        .pipe( include() )
        .pipe( coffee() )
        .pipe( gulp.dest("dist") )
});

gulp.task('default', ["scripts"]);
