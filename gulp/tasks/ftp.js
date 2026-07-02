import {configFTP} from "../config/ftp.js";
import vinylFTP from "vinyl-ftp";
import log from "fancy-log";

export const ftp = () => {
    configFTP.log = log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, {encoding: false})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FTP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
