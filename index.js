const fs = require("fs");

// fs.writeFileSync("read.txt", "My name is Fazle Rub");
// fs.appendFileSync("read.txt", " I am a Computer Engineer");
// const dataread = fs.readFileSync("read.txt", "utf-8");
// console.log(dataread);
// fs.renameSync("read.txt", "readandwrite.txt");

fs.writeFile("readAsync.txt", "I am a Computer Engineer", (err) => {
  console.log("Task1 Completed");
});
fs.appendFile("readAsync.txt", " and my name is Fazle Rub", (err) => {
  console.log("Task2 Completed");
});
fs.readFile("readAsync.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
fs.rename("readAsync.txt", "readandwriteAsync.txt", (err) => {
  console.log("Renaming Completed");
});
