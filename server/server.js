const http = require('http');
const app = require('./app')

const port = process.env.PORT || 5001;

console.log("Server listening in port : " + port);

const server = http.createServer(app);


server.listen(port)