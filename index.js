// simple crud api

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('\nHello, and welcome to the CRUD Public Library!\n\nWhat would you like to do today?\n1) Donate book: Send POST request to /api/create\n2) Check out book: Send GET request to /api/read \n3) Update book details: Send PUT request to /api/update\n4) Burn book: Send DELETE request to /api/delete\n\n');
        res.end();
    }

    if(req.url === '/api/create') {
        res.write(JSON.stringify([1,2,3,4,5,6]));
        res.end();
    }

    if(req.url === '/api/read') {
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }

    if(req.url === '/api/update') {
        res.write(JSON.stringify([1,3,2,5,4,6]));
        res.end();
    }

    if(req.url === '/api/delete') {
        res.write(JSON.stringify([0,0,0,0,0,0]));
        res.end();
    }
})

server.listen(3000);
console.log('Listening on :3000');