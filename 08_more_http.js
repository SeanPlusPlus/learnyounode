var http = require('http')

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8')
  let s = ''
  response.on('data', (chunk) => {
    s += chunk
  })
  response.on('end', () => {
    console.log(s.length);
    console.log(s);
  })
  response.on('error', console.error)
})
