//Робота із зображеннями — оптимізація + webp + responsive-варіанти через sharp
//(замінює вразливі gulp-imagemin + gulp-webp)
import {Transform} from "node:stream";
import sharp from "sharp";

const RASTER = /\.(png|jpe?g)$/i;

// Sharp-трансформація: оптимізує jpg/png, додає сусідній .webp, а для
// тумбнейлів проєктів (row-item) ще й 640w-варіанти (jpg/png + webp) для srcset.
function optimizeImages() {
    return new Transform({
        objectMode: true,
        async transform(file, _enc, cb) {
            // dev-режим і не-растрові — пропускаємо без змін (швидко)
            if (file.isNull() || file.isDirectory() || !app.isBuild || !RASTER.test(file.path)) {
                return cb(null, file);
            }

            const isPng = /\.png$/i.test(file.path);
            const isThumb = file.path.includes("row-item");
            const input = file.contents;

            const encode = (pipe, fmt) => {
                if (fmt === "webp") return pipe.webp({quality: 76});
                if (isPng) return pipe.png({compressionLevel: 9});
                return pipe.jpeg({quality: 82, mozjpeg: true});
            };

            try {
                // Повнорозмірний webp поруч з оригіналом
                const webpFile = file.clone();
                webpFile.path = file.path.replace(RASTER, ".webp");
                webpFile.contents = await encode(sharp(input), "webp").toBuffer();
                this.push(webpFile);

                // 640w-варіанти для тумбнейлів (srcset для мобільних)
                if (isThumb) {
                    const small = file.clone();
                    small.path = file.path.replace(RASTER, (m) => `-640${m}`);
                    small.contents = await encode(
                        sharp(input).resize({width: 640, withoutEnlargement: true}),
                        isPng ? "png" : "jpg"
                    ).toBuffer();
                    this.push(small);

                    const smallWebp = file.clone();
                    smallWebp.path = file.path.replace(RASTER, "-640.webp");
                    smallWebp.contents = await encode(
                        sharp(input).resize({width: 640, withoutEnlargement: true}),
                        "webp"
                    ).toBuffer();
                    this.push(smallWebp);
                }

                // Оптимізований оригінал
                file.contents = await encode(sharp(input), isPng ? "png" : "jpg").toBuffer();
                cb(null, file);
            } catch (err) {
                cb(null, file); // на помилці — пропускаємо оригінал без змін
            }
        },
    });
}

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
        .pipe(optimizeImages())
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg, {encoding: false}))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
};
