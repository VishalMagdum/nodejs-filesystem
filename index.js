const http = require('http')
const fs = require('fs')
const { type } = require('os')


const Server = http.createServer((req, res) => {
    let date = new Date()
    let timeStamp = date.getTime()
    fs.writeFileSync(`${timeStamp}.txt`, `${date}`, 'utf-8')
    let data = fs.readFileSync(`${timeStamp}.txt`, 'utf-8')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
})

Server.listen(5000, () => console.log('Srever is listening 5000')) 