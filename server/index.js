import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./router/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;
const URL =
  "mongodb+srv://amin:Dao@123@cluster0.ec9cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
