const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Page</title></head>')
        res.write('<body><form method="POST" action="/create-user"><input type="text" name="user"><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User List</title></head>')
        res.write('<body><ul><li>User1</li><li>Noorul Ameen K M</li></ul></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const userArr = [];
        req.on('data', (user) => {
            userArr.push(user);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(userArr).toString().split('=')[1];
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}


exports.routeHandler = routeHandler;