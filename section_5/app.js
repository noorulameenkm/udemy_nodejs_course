const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

app.use('/', (req, res, next) => {
    res.send("<h1>Response from Express</h1>");
});

// const server = http.createServer(app);


app.listen(3000);