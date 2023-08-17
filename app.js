const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

  let testabc = "testabc"
    console.log(req);
    console.log("a request was made:", req.method);
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World 111");
  res.end(JSON.stringify(testabc));
});

// the Server object returned by createServer is an EventEmitter, and what we have here is just shorthand for creating a server object and then adding the listener later.

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// curl  Network reponse   thunderclient url send
