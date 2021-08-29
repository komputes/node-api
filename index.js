const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        //...do this
    }

    if(req.url === '/api/create') {
        //...do this
    }

    if(req.url === '/api/read') {
        //...do this
    }

    if(req.url === '/apt/update') {
        //...do this
    }

    if(req.url === '/apt/delete') {
        //...do this
    }
})