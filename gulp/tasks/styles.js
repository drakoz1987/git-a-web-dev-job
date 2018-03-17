var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssimport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer, hexrgba]))
        .on('error', (errorInfo) => {
            console.log(errorInfo.toString());
            this.emit('end');
        }).pipe(gulp.dest('./app/temp/styles'));
});