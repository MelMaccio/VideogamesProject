const { Sequelize } = require('sequelize');
const videogameModel = require('./models/Videogame');
const genreModel = require('./models/Genre');
require('dotenv').config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST
} = process.env

//Create db connection
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
{logging:false} //removes logs from console
)

//define models -> in model folder -> import fx and execute passing sequelize as parameter
videogameModel(sequelize);
genreModel(sequelize);

//state relations
const { Videogame, Genre} = sequelize.models;

Videogame.belongsToMany(Genre, { through: 'VideogameGenres'});
Genre.belongsToMany(Videogame, { through: 'VideogameGenres'});

//export
module.exports = {sequelize, ...sequelize.models}