const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/index");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);
app.use("/", routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
