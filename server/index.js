import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import PostRouter from "./routes/posts.js";

dotenv.config();

const app = express();

app.use("/post", PostRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);
