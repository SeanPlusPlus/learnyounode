const http = require('http')
const url = require('url')
const moment = require('moment')
const port = process.argv[2]

http.createServer((request, response) => {
  const queryData = url.parse(request.url, true).query;
  const d = new Date(queryData.iso)

  let data = {}

  if (request.url.split('?')[0] === '/api/parsetime') {
    const hour = d.getHours()
    const minute = d.getMinutes()
    const second = d.getSeconds()
    data = {
      hour,
      minute,
      second,
    }
  }

  if (request.url.split('?')[0] === '/api/unixtime') {
    const unixtime = moment(d).valueOf()

    data = {
      unixtime
    }
  }

  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(data));
})
.listen(port);
