import { src, dest } from "gulp";
import browserSync from "browser-sync";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify-es";
import rename from "gulp-rename";
import webpackStream from "webpack-stream";

const scripts = () =>
  src("src/js/script.js")
    .pipe(
      webpackStream({
        mode: "development",
        devtool: "inline-source-map",
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(rename("script.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(dest("src/js"))
    .pipe(browserSync.get("My Server").stream());

export default scripts;
