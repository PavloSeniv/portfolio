//Копіювання index.html з src до dist(якщо папки немає, gulp створить сам)
import fileInclude from "gulp-file-include"; // Для об'єднання декількох html файлів в єдиний index.html

// Мітка версії для кеш-бастингу (одна на збірку)
const versionStamp = Date.now();

export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "HTML",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(fileInclude())
            .pipe(app.plugins.replace(/@img\//g, "img/"))
            // Кеш-бастинг: додаємо ?_v=<stamp> до css/js посилань (лише на білді).
            // Замінює вразливий gulp-version-number (fs-path) простим replace.
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    app.plugins.replace(
                        /(href|src)="([^"]+\.(?:css|js))"/g,
                        `$1="$2?_v=${versionStamp}"`
                    )
                )
            )
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};
