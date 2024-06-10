import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-dart-sass';
import connect from 'gulp-connect';
import rimraf from 'gulp-rimraf';

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    fonts: {
        src: 'src/public/fonts/*.woff2',
        dest: 'dist/public/fonts'
    },
    images: {
        src: 'src/public/images/**/*.{png,svg,jpg}',
        dest: 'dist/public/images/'
    },
    html: {
        src: './src/**/*.html',
        dest: './dist'
    }
};

gulp.task('clean', () => {
    return gulp.src('dist', { read: false, allowEmpty: true })
        .pipe(rimraf());
});

gulp.task('copy:html', () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
});

gulp.task('copy:fonts', () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
});

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest));
});

// gulp.task('scripts', () => {
//     return gulp.src(paths.scripts.src)
//         .pipe(gulp.dest(paths.scripts.dest))
// });

gulp.task('images', () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('server', () => {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 3000
    });
});

gulp.task('default', gulp.series('copy:html', 'copy:fonts', 'sass', 'images', 'server'));

gulp.task('watch', () => {
    gulp.watch(paths.html.src, gulp.series('copy:html'));
    gulp.watch(paths.html.src, gulp.series('copy:fonts'));
    gulp.watch(paths.styles.src, gulp.series('sass'));
    gulp.watch(paths.images.src, gulp.series('images'));
    gulp.watch('src/**/*', gulp.series('reload'));

});

gulp.task('reload', (done) => {
    connect.reload();
    done();
});
