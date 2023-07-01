const { Router } = require('express'); 

const genresRouter = Router(); 

genresRouter.get('/', (req, res) =>{
    res.status(200).send('NIY: this route get all genres')
})

module.exports = genresRouter;