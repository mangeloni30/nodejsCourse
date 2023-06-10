const http = require("http");
const request = require ("./routes");

const server = http.createServer(request.requestHandler);

server.listen(3000);
