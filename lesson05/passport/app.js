const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const authRouter = require("./auth").router;
const diaryRouter = require("./diary").router;


const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use("/auth", authRouter);
app.use("/", diaryRouter);


mongoose.connect("mongodb://127.0.0.1/backend1");
app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
