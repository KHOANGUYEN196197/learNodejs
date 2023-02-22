import express from "express";
import configViewEngine from "../src/configs/viewEngine.js";
import { env } from "process";
import initWebRouter from "../src/route/web.js";
const app = express();
const port = env.PORT || 8080;

/* Calling the function `configViewEngine` and passing the `app` object to it. */
configViewEngine(app);

/* Calling the function `initWebRouter` and passing the `app` object to it. */
initWebRouter(app);

app.listen(port, () => {
  return true;
});
