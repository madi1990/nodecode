import http from 'node:http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});