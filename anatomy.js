const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request", (request, response) => {
  // the same kind of magic happens here!

  // if (request.url.substring(0, 7) === "/secret") {
  // } else {
  //   console.log(request.url);
  //   console.log("a request was made", request.method);
  //   response.end("hello word");
  // }

  // // console.log(request.headers)
  // console.log(request.headers["user-agent"]);

  let body = [];
  request
    .on("error", (err) => {
      // This prints the error message and stack trace to `stderr`.
      console.error(err.stack);
    })

    .on("data", (chunk) => {
      body.push(chunk);
    })

    .on("end", () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      // response.writeHead(200, {
      //   "Content-Type": "application/json",
      //   "X-Powered-By": "bacon",
      // });
      //   response.write('Hello')

      // let jsonObj = JSON.parse(data);
      // for (let key in jsonObj) {
      //   response.write(key + ":" + jsonObj[key] + "\n");
      // }

      fs.readFile("template.html", "utf-8", (err, data) => {
        if (err) throw err;

        console.log("before replace", data);
        console.log("before", body);
        let jsonObj = JSON.parse(body);
        console.log("after", body);
        for (let key in jsonObj) {
          data = data.replace(`{${key}}`, jsonObj[key]);
        }

        console.log("after replace", data);
        response.end(data);
      });

      // for (let key in jsonObj) {
      //   response.write(key + ":" + jsonObj[key] + "\n");
      //  }

      //   response.end(body || "No Body");
    });
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
