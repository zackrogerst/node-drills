import http from "http";

const server = http.createServer((req, res) => {
	res.end("Hello importers");
});

server.listen(3002, () => {
	console.log("server running on 3002");
});
