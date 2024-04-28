import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = `./dist`; // Можна використовувати rootFolder
const buildFolder = rootFolder;

const srcFolder = `./src`;

export const path = {
    // Папка dist(видається замовнику)
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/assets/`,
        fonts: `${buildFolder}/fonts/`,
        pluginsFile: `${buildFolder}/plugins/`,
    },

    //Папка із початковими файлами
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        // html: `${srcFolder}/*.pug`, // Для pug
        scss: `${srcFolder}/scss/style.scss`,
        // css: `${srcFolder}/style/scss/style.scss`,
        js: [`${srcFolder}/js/app.js`, `${srcFolder}/js/plugins*.js`],
        //Якщо не  вказати розширення також іх верхнього регістру то можливий варіант не копіювання зображення
        images: `${srcFolder}/assets/**/*.+(png|PNG|jpg|JPG|jpeg|JPEG|gif|ico|webp)`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,

        pluginsJs: `${srcFolder}/plugins/**/*.js`,
        pluginsCss: `${srcFolder}/plugins/**/*.css`,
        pluginsPhp: `${srcFolder}/plugins/**/*.php`,
    },

    //Об'єкт  для слідкування за файлами в реальному часі(browserSync)
    watch: {
        files: `${srcFolder}/files/**/*.*+(mp4|mp3|pdf)`,
        html: `${srcFolder}/**/*.html`,
        // html: `${srcFolder}/*.pug`, // Для pug
        scss: `${srcFolder}/scss/style.scss`,
        // css: `${srcFolder}/style/**/*.{css,scss,less,sass}`,
        js: [`${srcFolder}/js/**/*.js`],
        images: `${srcFolder}/img/**/*.+(png|PNG|jpg|JPG|gif|ico|svg|webp)`,

        pluginsJs: `${srcFolder}/plugins/**/*.js`,
        pluginsCss: `${srcFolder}/plugins/**/*.css`,
        pluginsPhp: `${srcFolder}/plugins/**/*.php`,
    },

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `go-trip`,
};