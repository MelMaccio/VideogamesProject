const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Videogame', 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platforms: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
    );
}