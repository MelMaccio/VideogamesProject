//aca vamos a crear el router -> encargado de definir las rutas
const { Router } = require('express'); 

//modularizacion de rutas 
const videogamesRouter = require('./videogamesRouter');
const genresRouter = require('./genresRouter');

const mainRouter = Router(); 

mainRouter.use('/videogames', videogamesRouter);
mainRouter.use('/genres', genresRouter);

module.exports = mainRouter; 