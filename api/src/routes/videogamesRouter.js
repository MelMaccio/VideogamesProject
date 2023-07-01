const { Router } = require('express'); 


const { 
    getVideogamesHandler,
    getDetailHandler,
    postVidegoameHandler 
} = require('../handlers/videogamesHandlers')

const videogamesRouter = Router(); 

//creo mis rutas de videogames y les asigno su handler correspondiente
videogamesRouter.get('/', getVideogamesHandler)

videogamesRouter.get('/:id', getDetailHandler)

videogamesRouter.post('/', postVidegoameHandler )


module.exports = videogamesRouter;