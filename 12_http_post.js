const http = require('http')
const port = process.argv[2]

http.createServer((request, response) => {
  if (request.method == 'POST') {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(body.toUpperCase());
    })
  } else {
    console.log('GET');
    const html = "<html><body>foo</body></html>";
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
  }
})
.listen(port);
