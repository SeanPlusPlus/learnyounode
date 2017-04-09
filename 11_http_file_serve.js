const http = require('http')
const fileSystem = require('fs')
const path = require('path')
const port = process.argv[2]

http.createServer(function(request, response) {
    const f = process.argv[3]
    const filePath = path.join('/', f);
    const stat = fileSystem.statSync(filePath);
    const readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
})
.listen(port);
