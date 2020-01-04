const express = require('express');
const http = require('http');

const app = express();

app.use("/users", (req, res, next) => {
    res.send("<h1>Users</h1>");
});

app.use("/", (req, res, next) => {
    res.send("<h1>Base Route</h1>");
});

const server = http.createServer(app);


server.listen(3000);