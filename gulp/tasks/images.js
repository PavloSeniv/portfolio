//Робота із зображеннями
import webp from "gulp-webp"; // Для перетворення зображень у формат webp
//Робота із зображеннями
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from "gulp-imagemin"; // // Оптимізація зображень

export const images = () => {
    return app.gulp
        .src(app.path.src.images, {encoding: false})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webp({
                    quality: 70,
                })
            )
        )
        .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images, {encoding: false})))
        .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild,
            imagemin([
                gifsicle({interlaced: true}),
                mozjpeg({quality: 85, progressive: true}),
                optipng({optimizationLevel: 3}), // 0 to 7
                svgo({
                    plugins: [{name: "removeViewBox", active: false}], // Зберігаємо viewBox
                }),
            ], {verbose: false})
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg, {encoding: false}))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
};
