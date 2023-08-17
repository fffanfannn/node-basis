const express = require("express");
const app = express();
const port = 3001;

// const singers= require("./singer.json");
// app.get("/:productcode.html", (req, res) => {
//   let id = req.params.productcode;
//   let singer = singers.find((singer) => { 
//     if (Number(id) == singer.id) { 
//    return true;
//     } 
//   });
//   res.send(singer);

//   if (!singer) { 
//     res.statusCode = 404;
//     res.send("404 NOT FOUND");
//     return;
//   }
// });

// app.get("/:code.html", (req, res) => {
//   console.log(req.params);
//   console.log(req.params.id);
//   res.send(":code.html");
// });


app.get('/request', (req, res) => {
  // console.log(req.method);

  // console.log(req.url);
  // console.log(req.path); //express
  // // /request?a=100&b=200
  console.log(req.query); //express

  // console.log(req.httpVersion);

  // console.log(req.headers);
  // console.log(req.get("host"));

  // console.log(req.ip);

  // res.statusCode = 404;
  // res.statusMessage = "xxxxx";
  // res.status(500); // express

  // res.setHeader("xxx", "yyy");
  // res.set("xxx", "yyy"); //express

  // res.write("res.write");
  // res.end("res.end");
  res.send("res.send");

  // res.redirect("http://www.google.com");
  // res.download(__dirname + '/package.json');
  // res.sendFile(__dirname + '/package.json');
  // res.json({name:"xxx", age: 20});
});

app.all("/", (req, res, next) => {
    res.send("aaaall" + req.method);
    
});

app.get("/", (req, res, next) => {
    res.send("ggggggget " + req.method);
    next();
});

app.post("/", (req, res, next) => {
    res.send("pppppppost " + req.method);
    next();
});

app.all("/", (req, res ) => {
  res.send("allllllllll  " );
});

app.all("*", (req, res) => {
  res.send("404 NOT FOUND  ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});