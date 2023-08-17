const fs = require("fs");

fs.readFile("template.html", "utf-8", (err, data) => {

  if (err) throw err;

  console.log("before replace",data);

  const replacement = {
    ttttitle: "my first ttttttttitle",
    content: "my first content",
  };

  for (let key in replacement) {
    data = data.replace(`{${key}}`, replacement[key]);
  }
  
  console.log("after replace", data);

  fs.writeFile("./static/index.html", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

});


