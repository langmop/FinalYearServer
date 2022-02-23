import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import customer from "./routes/customer.js";
import postRoutes from "./routes/posts.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/posts", postRoutes);
app.use("/customer", customer);
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://gaurav:gaurav123@cluster0.c1cl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on Port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// mongoose.set("useFindAndModify", false);
