//creamos el servidor
const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/');

const server = express();

//configuramos los middlewares: funciones intermedias que hacen 'algo' con nuestras req y res
//.use -> le dice a nuestro servidor 'pasa por aca'
server.use(morgan('dev'));
server.use(express.json()) //este middleware me permite parsear las respuestas en json, asi poder el .send()
server.use(mainRouter);

module.exports = server;