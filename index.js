// import global module
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// import routes
import AdminRoute from "./routes/admin.routes.js";
import AuthRoute from "./routes/auth.routes.js";
import AboutRoute from "./routes/languages/about.routes.js";
import BlogRoute from "./routes/languages/blog.routes.js";
// config dotenv securety
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
app.use("/api/blog", BlogRoute);
// PORT
const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.SERVER_URL)
  .then(() => console.log("Mongo db succesfully connected"))
  .catch((err) => console.log(`Something wrong ${err.message}`));

// app use static folder in images
app.use(express.static("./images"));

app.listen(PORT, () => console.log(`Server is running: ${PORT}`));
