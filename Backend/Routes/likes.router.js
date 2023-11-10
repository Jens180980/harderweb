import express from "express";
import LikesController from "../Controllers/likes.controller.js";

const controller = new LikesController();
const router = express.Router();

router.get("/api/likescount", (req, res) => {
  controller.list(req, res);
});
router.put("/api/song/", (req, res) => {
  controller.update(req, res);
});

export { router };
