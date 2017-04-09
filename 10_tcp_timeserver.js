const net = require('net')
const moment = require('moment')


const server = net.createServer((socket) => {
  const dateTime = new Date()
  const d = moment(dateTime).format('YYYY-MM-DD HH:mm')
  socket.write(d)
  socket.write('\n')
  socket.end()
})

const port = process.argv[2]
server.listen(port)
