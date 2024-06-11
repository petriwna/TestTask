import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-dart-sass';
import connect from 'gulp-connect';
import rimraf from 'gulp-rimraf';
import htmlmin from 'gulp-htmlmin';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    copy: {
        src: 'src/air-datepicker/*',
        dest: 'dist/air-datepicker/'
    },
    fonts: {
        src: 'src/public/fonts/**/*.woff2',
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

gulp.task('html', () => {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest))
});

gulp.task('fonts', () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
});

gulp.task('copy', () => {
    return gulp.src(paths.copy.src)
        .pipe(gulp.dest(paths.copy.dest))
});

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', () => {
    return browserify({
        entries: ['./src/js/index.js'],
        debug: true,
        transform: [babelify.configure({ presets: ['@babel/preset-env'] })]
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.dest));
});

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

gulp.task('default', gulp.series('clean', 'copy', 'html', 'scripts', 'sass', 'fonts', 'images', 'server'));

gulp.task('watch', () => {
    gulp.watch(paths.copy.src, gulp.series('copy'));
    gulp.watch(paths.html.src, gulp.series('html'));
    gulp.watch(paths.styles.src, gulp.series('sass'));
    gulp.watch(paths.scripts.src, gulp.series('scripts'));
    gulp.watch(paths.fonts.src, gulp.series('fonts'));
    gulp.watch(paths.images.src, gulp.series('images'));
    gulp.watch('src/**/*', gulp.series('reload'));
});

gulp.task('reload', (done) => {
    connect.reload();
    done();
});
