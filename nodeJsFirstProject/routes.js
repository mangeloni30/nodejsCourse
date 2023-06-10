const fs = require ("fs");

const requestHandler = (req, res) => {
  console.log("req.method ==> ", req.method);
  console.log("req.url ==> ", req.url);
  console.log("req.headers ==> ", req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='nessage'><button type='submit'>Send</button></form></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk --> ", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody ", parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>First page</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
}

module.exports.requestHandler = requestHandler;
