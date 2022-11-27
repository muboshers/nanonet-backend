// import global module
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// import routes
import AdminRoute from "./routes/admin.routes.js";
import AuthRoute from "./routes/auth.routes.js";
import AboutRoute from "./routes/languages/about.routes.js";
// config dotenv
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);
app.use(express.json());

// use routes in here
app.use("/api/admin", AdminRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/about", AboutRoute);
// PORT
const PORT = process.env.PORT || 4000;
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Mongo db succesfully connected"))
  .catch((err) => console.log(`Something wrong ${err.message}`));

app.listen(PORT, () => console.log(`Server is running: ${PORT}`));
