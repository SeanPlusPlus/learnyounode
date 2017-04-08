var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]

fs.readdir(path, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var files = data.filter((f) => {
    return f.split('.')[1] === ext
  })

  files.forEach((f) => {
    console.log(f);
  })
});
