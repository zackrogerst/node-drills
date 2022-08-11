const http = require("http");

const server = http.createServer((req, res) => {
	res.end("Hello There");
});

server.listen(3001, () => {
	console.log("server running on 3001");
});
