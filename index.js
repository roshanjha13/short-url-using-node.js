const express = require("express");
const dotenv = require("dotenv").config();
const { connectToMongoDB } = require("./config/connect");
const app = express();

const urlRoute = require("./routes/urlRoute");
const mongoURL = process.env.MONGO_URL;
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url", urlRoute);

connectToMongoDB(mongoURL).then(console.log("Mongodb Connected"));

app.listen(port, () => {
  console.log(`App is running on ${port} server`);
});
