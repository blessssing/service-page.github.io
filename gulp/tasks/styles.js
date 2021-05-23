import { src, dest } from "gulp";
import browserSync from "browser-sync";
import scss from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";

const styles = () =>
  src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("src/css"))
    .pipe(browserSync.get("My Server").stream());

export default styles;
