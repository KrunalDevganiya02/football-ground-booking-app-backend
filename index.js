import express from "express";
import database from "./DB/database.js";
import "dotenv/config";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

//to connect Database
database();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res.status(200).send("this is home");
});

//Routes
import user from "./Routes/user.js";
app.use("/user", user);

import admin from "./Routes/admin.js";
app.use("/admin", admin);

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
