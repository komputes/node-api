// express crud api

const express = require("express");
const ip = require('ip');
const app = express();

// Middleware used in the request processing pipeline - crashes, maybe need bodyParser
//app.use(express.json());

// Placeholder database
const books = [
    { id: 1, name: 'Neuromancer' , author: 'William Gibson' },
    { id: 2, name: 'Little Brother' , author: 'Cory Doctorow' },
    { id: 3, name: 'The Chrysalids' , author: 'John Wyndham' },
    { id: 4, name: 'Nineteen Eighty-Four' , author: 'George Orwell' },
    { id: 5, name: 'Fahrenheit 451' , author: 'Ray Bradbury' }
];

// Landing page - provide info
app.get('/', (req, res) =>  {
        res.send('\nUser has logged on from ' + ip.address() + '\n\nHello, and welcome to the CRUD Public Library!\n\nWhat would you like to do today?\n1) Donate book: Send POST request to /api/create\n2) Check out book: Send GET request to /api/read \n3) Update book details: Send PUT request to /api/update\n4) Burn book: Send DELETE request to /api/delete\n\n');
        //res.send('Hello World');
        res.end();
    });

// Donate book: Send POST request to /api/create
// Requires express.json for parsing which crashes
// error indicates it is unsupported https://github.com/senchalabs/connect#middleware
// curl -d '{'name':'greeneggs', 'author':'drseuss'}' -X POST localhost:8080/api/create/
// 
app.get('/api/create', (req, res) => {
    const book = {
        id: courses.length + 1,
        name: req.body.name,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});
// List all book: Send GET request to /api/read/
app.get('/api/read/', (req, res) => {
    // As a response, echo id provided by user in path back to the user
    res.send(books);
});
// Check out book: Send GET request to /api/read/{id} 
app.get('/api/read/:id', (req, res) => {
    // As a response, echo id provided by user in path back to the user
    // res.send(req.params.id);
    //
    // Only return information about the selected book
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Not Found');
    res.send(book);
});
// Update book details: Send PUT request to /api/update

// Burn book: Send DELETE request to /api/delete

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));