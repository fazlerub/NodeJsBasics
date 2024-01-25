import chalk from "chalk";
import validator from "validator";
const res = validator.isEmail("fazal@gmailcom");
console.log(
  res ? chalk.yellow.inverse("True") : chalk.cyanBright.inverse("False")
);
