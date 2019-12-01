const http = require('http');
const route = require('./routes');

const server = http.createServer(route.routeHandler);

server.listen(3500);