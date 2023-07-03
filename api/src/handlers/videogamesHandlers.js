//handlers -> fx que manejan mis requests y mis responses
const {
    createVideogame,
    getVideogameById,
    getVideogameByName,
    getVideogames
} = require('../controllers/videogamesControllers');

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;

    try {
        const result = name 
        ? await getVideogameByName(name)
        : await getVideogames()

        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

const getDetailHandler = async (req, res) => {
    const { id } = req.params; 
    const source = isNaN(id) ? 'db' : 'api'
    try {
        const videogame = await getVideogameById(id, source)
        res.status(200).json(videogame)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

const postVidegoameHandler = async (req, res) => {
    const {name, description, platforms, image, releaseDate, rating} = req.body;
    try {
        const newVideogame = await createVideogame(name, description, platforms, image, releaseDate, rating)
        res.status(200).json(newVideogame)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


module.exports = {
    getVideogamesHandler,
    getDetailHandler,
    postVidegoameHandler
}