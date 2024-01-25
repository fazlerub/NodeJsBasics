const bioData = {
  name: "Fazle Rub",
  age: 22,
};

//convert to json data
const jsonData = JSON.stringify(bioData);

const fs = require("fs");

fs.writeFile("bio.json", jsonData, (err) => {
  console.log("Done writing bio.json");
});
