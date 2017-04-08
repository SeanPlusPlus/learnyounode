var nums = process.argv.filter((item) => {
  return parseInt(item, 10);
}).map((item) => {
  return parseInt(item, 10);
}).reduce((p, c) => {
  return p + c;
})

console.log(nums);

var fs = require('fs')
