const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genre', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
    );
}