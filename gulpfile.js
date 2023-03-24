const fileinclude = require('gulp-file-include');
const markdown = require('markdown');
var runSequence = require('gulp4-run-sequence');
const gulp = require('gulp');

gulp.task('build', function (callback) {
    runSequence('build-pages', 'build-blog', callback);
});

gulp.task('build-pages', function () {
    return gulp.src([
        '_pages/index.html',
        '_pages/demo.html',
        '_pages/download.html',
        '_pages/blog.html',
        '_pages/for-business.html',
        '_pages/fur-das-geschaft.html'
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('build-blog', function () {
    return gulp.src([
        `_blog/blog_creoox_becomes_xeokit_sales_partner.html`,
        '_blog/blog_xeokit_at_webgl_meetup_2020.html',
        '_blog/blog_full_precision_geometry.html',
        '_blog/blog_xkt_utilities_library.html',
        '_blog/blog_xeokit_powering_bimdata.html',
        '_blog/blog_xeokit_partners_with_bimspot.html',
        '_blog/blog_xeokit_powering_planradar.html',
        '_blog/blog_xeokit_partners_with_congrid.html',
        //'_blog/blog_view_culling.html',
        '_blog/blog_explosions.html',
        '_blog/blog_xeokit_partners_with_bimspot.html',
        '_blog/blog_xeokit_partners_with_dstudio.html',
        '_blog/blog_xeokit_partners_with_singular.html',
        '_blog/blog_ambientShadows.html',
        '_blog/blog_bimViewer.html',
        '_blog/blog_fastLoading.html',
        '_blog/blog_xeokit_partners_with_openproject.html',
        '_blog/blog_smoothRendering.html',
        '_blog/blog_saoEdgesDisableOnCameraMove.html',
        '_blog/blog_xeokit_at_siggraph.html',
        '_blog/blog_treeViews.html',
        '_blog/blog_xeokit_release_1.1.html',
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});
