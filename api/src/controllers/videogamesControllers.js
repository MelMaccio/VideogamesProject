//controler -> funcion que interactua con el modelo. Se encarga de la logica de la ruta.
const {Videogame} = require('../db');
const axios = require('axios');
require('dotenv').config();
const cleanData = require('../utils')
const { Op } = require("sequelize");

const { API_KEY } = process.env;

const getVideogames = async () => {
    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data
    const apiVideogamesClean = cleanData(apiVideogamesRaw)
    const dbVideogames = await Videogame.findAll();

    return [...apiVideogamesClean, ...dbVideogames];
};

const getVideogameByName = async (name) => {
    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&search_exact=true`)).data
    const apiVideogamesClean = cleanData(apiVideogamesRaw)
    const dbVideogames = await Videogame.findAll({where: {name: {[Op.iLike]: `%${name}`}}});

    return [...apiVideogamesClean, ...dbVideogames];
};

const getVideogameById = async (id, source) => {
    const videogame = source === 'api'
    ?
    (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    :
    await Videogame.findByPk(id)
    
    if(source === 'db') return videogame

    const videogameClean = cleanData(videogame)

    return videogameClean;
};

const createVideogame = async (name,description,platforms,image,releaseDate, rating) => 
    await Videogame.create({name, description, platforms, image, releaseDate, rating})



module.exports = {
    getVideogames,
    getVideogameById,
    getVideogameByName,
    createVideogame
}