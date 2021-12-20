import express from "express";
import books from "./books-data.js";
import { getBooks, findBookById} from "./models/books.js"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});

app.get("/books", (req, res) => {
  const books = getBooks();
  res.json(books);
});

app.get("/books/:id", function (req, res) {
  const id = Number(req.params.id);
  const found = findBookById(id);
  
  if (found === undefined) {
    res.json({message: `Book does not exist with an id of ${req.params.id}.`});
  }
  //give back the correct book.
  res.json({message: "I found a book for you" , book: found });
});
//we want to send back a single book.
//get /books/ which book? return book 1 with id of one.

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
