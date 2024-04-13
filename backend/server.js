const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute.js");
const tweetRoute = require("./routes/tweetRoute.js");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
var bodyParser = require("body-parser");

dotenv.config();

const PORT = 8000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

connectDb();
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
