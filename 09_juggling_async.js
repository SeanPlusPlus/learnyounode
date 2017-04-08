var http = require('http')

const urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4],
]

let myStrings = {}

urls.forEach((url) => {

  http.get(url, (response) => {
    myStrings[url] = ''
    response.setEncoding('utf8')
    let s = ''
    response.on('data', (chunk) => {
      s += chunk
    })
    response.on('end', () => {
      myStrings[url] = s
      if (Object.keys(myStrings).length === 3) {
        urls.forEach((u) => {
          console.log(myStrings[u]);
        })
      }
    })
    response.on('error', console.error)
  })
})
