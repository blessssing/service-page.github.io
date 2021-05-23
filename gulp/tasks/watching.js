import { watch } from "gulp";
import browserSync from "browser-sync";
import html from "./html";
import styles from "./styles";
import scripts from "./scripts";

const watching = () => {
  watch("src/*.html", html).on("change", browserSync.get("My Server").reload);
  watch("src/scss/**/*.scss", styles);
  watch(["src/**/*.js", "!src/js/script.min.js"], scripts);
};

export default watching;
