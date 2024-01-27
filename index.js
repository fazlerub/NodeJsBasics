const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("read.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });
  // });
  // server.listen("8000", "localhost", () => {
  //   console.log("listening on 8000");

  const rstream = fs.createReadStream("read.txt");
  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });
});
server.listen("8000", "localhost", () => {
  console.log("listening on 8000");
});
