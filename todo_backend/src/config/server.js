const port = 3003
const bodyparser = require('body-parser')
const express = require('express')
const server = express()
const allowsCors = require('./cors')

server.use(bodyparser.urlencoded({ extended: true }))
server.use(bodyparser.json())
server.use(allowsCors)

server.listen(port, function() {
    console.log(`BACKEND EXECUTNDO NA PORTA ${port}.` )
})

module.exports = server