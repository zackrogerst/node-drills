const fs = require("fs");

const path = require("path");

fs.appendFile(path.join(__dirname, "text.txt"), "Aloha", err => (err ? console.log(err) : console.log("success!")));

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => (err ? console.log(err) : console.log("data:", data)));

fs.writeFile(__dirname + "/text.txt", "Mahalo!", err => (err ? console.log(err) : console.log("written!")));

fs.rename(__dirname + "/text.txt", __dirname + "/else.txt", err => (err ? console.log(err) : console.log("renamed!")));

fs.unlink(__dirname + "/else.txt", err => (err ? console.log(err) : console.log("unlinked!")));
