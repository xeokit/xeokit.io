const fileinclude = require('gulp-file-include');
const markdown = require('markdown');
var runSequence = require('gulp4-run-sequence');
const gulp = require('gulp');

gulp.task('fileinclude', function (callback) {
    runSequence('build-pages','build-blog', callback);
});

gulp.task('build-pages', function() {
    return gulp.src([
        '_pages/index.html',
        '_pages/demo.html',
        '_pages/download.html',
        '_pages/blog.html'
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('build-blog', function() {
    return gulp.src([
        '_blog/blog_xeokit_partners_with_dstudio.html',
        '_blog/blog_xeokit_partners_with_singular.html',
        '_blog/blog_ambientShadows.html',
        '_blog/blog_bimViewer.html',
        '_blog/blog_fastLoading.html',
        '_blog/blog_xeokit_partners_with_openproject.html',
        '_blog/blog_smoothRendering.html',
        '_blog/blog_saoEdgesDisableOnCameraMove.html',
        '_blog/blog_xeokit_at_siggraph.html',
        '_blog/blog_treeViews.html'
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});
