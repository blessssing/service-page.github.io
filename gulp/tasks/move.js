import { src, dest } from "gulp";

const move = () =>
  src(
    [
      "src/css/style.min.css",
      "src/fonts/**/*",
      "src/js/script.min.js",
      "src/app_node/**/*",
      "src/*.html",
    ],
    { base: "src" }
  ).pipe(dest("dist"));

export default move;
