var express = require("express");
var app = express();
const {
  getBookByID,
  getAllBook,
  postBook,
  deleteBook,
  editBook,
} = require("./handler/book");
const { postWriter, getAllWriter } = require("./handler/writer");
const { postCategory, getAllCategory } = require("./handler/category");

app.get("/book/:id", getBookByID);
app.get("/books", getAllBook);
app.post("/book", postBook);
app.delete("/book/:id", deleteBook);
app.put("/book/:id", editBook);

app.post("/writer", postWriter);
app.get("/getallwriter", getAllWriter);

app.post("/category", postCategory);
app.get("/getallcategory", getAllCategory);

module.exports = app;
