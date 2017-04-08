var fs = require('fs')

module.exports = function (path, ext, callback) {
  fs.readdir(path, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var files = data.filter((f) => {
      return f.split('.')[1] === ext
    })

    return callback(null, files);
  });
}
