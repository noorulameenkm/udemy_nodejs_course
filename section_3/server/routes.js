const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (msg) => {
            body.push(msg);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Webpage in this Course</title></head>')
    res.write('<body><h1>Server Response</h1></body>')
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

// module.exports = {
//     requestHandler
// }

// exports.requestHandler = requestHandler;