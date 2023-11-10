import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router as LikesRouter } from "./Routes/likes.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(LikesRouter);

app.listen(port, () => {
  console.log(`Server kører på port ${port}`);
});
