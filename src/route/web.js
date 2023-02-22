import express from "express";
import { getHomePage } from "../controller/homeController.js";
let router = express.Router();
const initWebRouter = (app) => {
  router.get("/", getHomePage);

  router.get("/about", (req, res) => {
    res.send("khoabmt44444");
  });
  return app.use("/", router);
};

export default initWebRouter;
