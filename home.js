const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.get("/", (req, res, next) => {
  res.send("hello ritik!");
  res.render("home", {});
});
app.listen(port, console.log(`listening on ${port}`));
