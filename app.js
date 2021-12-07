import express from "express";
import books from "./books-data.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/book/:id", function (req, res) {
  console.log(req.params);

  //id from a string into a number
  const id = Number(req.params.id);

  //find the correct book with the id from the books array
  const found = books.find(function (book) {
    return book.id === id;
  });
  
  console.log(found);
  if (found === undefined) {
    res.json({
      message: `Book does not exist with an id of ${req.params.id}.`,
    });
  }
  //give back the correct book.
  res.json(found);
});
//we want to send back a single book.
//get /books/ which book? return book 1 with id of one.

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
