var express = require("express");
var app = express();
const {
  getBookByID,
  getAllBook,
  postBook,
  deleteBook,
  editBook,
} = require("./handler/book");
const { postWriter } = require("./handler/writer");
const { postCategory } = require("./handler/category");

app.get("/book/:id", getBookByID);
app.get("/book", getAllBook);
app.post("/book", postBook);
app.delete("/book/:id", deleteBook);
app.put("/book/:id", editBook);

app.post("/writer", postWriter);

app.post("/category", postCategory);

module.exports = app;
