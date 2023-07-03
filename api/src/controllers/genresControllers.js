const {Genre} = require('../db');

const getGenres = async () => await Genre.findAll();

module.exports = getGenres;