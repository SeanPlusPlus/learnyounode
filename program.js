var mymodule = require('./mymodule.js')
var path = process.argv[2]
var ext = process.argv[3]

var display = function(err, f) {
  if (err) {
    console.log('err');
    return;
  }
  f.forEach((fi) => {
    console.log(fi);
  })
}

var f = mymodule(path, ext, display)
