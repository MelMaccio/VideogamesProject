const { Router } = require('express'); 

const videogamesRouter = Router(); 

//ahora si creo mis rutas de videogames
videogamesRouter.get('/', (req, res) =>{
    res.status(200).send('NIY: this route get all videogames/ query search videogames')
})

videogamesRouter.get('/:id', (req, res) =>{
    res.status(200).send('NIY: this route get a videogame detail based on id')
})

videogamesRouter.post('/', (req, res) =>{
    res.status(200).send('NIY: this route post a new videogame')
})


module.exports = videogamesRouter;