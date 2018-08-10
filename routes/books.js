var express = require('express');
var router = express.Router();
var book = require('../models/book.js');

/* GET books listing. */
router.get('/books', (req, res, next) => {
  let books = book.getBooks();
  console.log(books);
  res.json(books);
})
.get('/books/:id', (req, res, next) => {
  let isbn = req.params.id;
  console.log(isbn);
  let bookItem = book.getBook(isbn);
  res.json(bookItem);
})
.put('/books/:id', (req, res, next) => {
  let isbn = req.param('id');
  console.log(isbn);
  console.log(req.params);
  let bookItem = book.getBook(isbn);
  res.json(bookItem);
})
.delete('/books/:id', (req, res, next) => {
  let isbn = req.param('id');
  console.log(isbn);
  console.log(req.params);
  let bookItem = book.getBook(isbn);
  res.json(bookItem);
})
.post('/books', (req, res, next) => {
  res.json(req.params);
});
module.exports = router;