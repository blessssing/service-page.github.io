// TODO === My Working Template ===

import { series, parallel } from "gulp";
import serve from "./gulp/tasks/serve";
import watching from "./gulp/tasks/watching";
import styles from "./gulp/tasks/styles";
import scripts from "./gulp/tasks/scripts";
import images from "./gulp/tasks/images";
import clear from "./gulp/tasks/clear";
import move from "./gulp/tasks/move";

export const build = series(clear, styles, scripts, images, move);
export default series(scripts, styles, parallel(serve, watching));
