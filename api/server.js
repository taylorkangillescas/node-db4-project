const express = require('express');

const someRouter = require('./router')
const server = express();

server.use(express.json());
server.use('/api/', someRouter)

module.exports = server;