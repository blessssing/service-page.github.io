import bSync from "browser-sync";
const browserSync = bSync.create("My Server");

const serve = () => {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    port: 3030,
  });
};

export default serve;
