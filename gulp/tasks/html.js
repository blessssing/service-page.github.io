import { src, dest } from "gulp";

const html = () => src("src/*.html").pipe(dest("dist"));

export default html;
