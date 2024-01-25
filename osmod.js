const os = require("os");
console.log(os.arch());
const freememory = os.freemem();
const totalmemory = os.totalmem();

console.log(`${freememory / 1024 / 1024 / 1024}`);
console.log(`${totalmemory / 1024 / 1024 / 1024}`);
console.log(os.hostname());
console.log(os.platform());
