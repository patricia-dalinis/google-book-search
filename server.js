require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGODB || "mongodb://heroku_f16xbjfm:password1@ds219672.mlab.com:19672/heroku_f16xbjfm"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
