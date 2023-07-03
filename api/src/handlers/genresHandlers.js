const getGenres = require('../controllers/genresControllers');

const getGenresHandler = async (req, res) =>{
    const genres = await getGenres();
    res.status(200).json(genres);
}

module.exports = getGenresHandler