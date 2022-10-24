const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },
    maps: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    map: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timezones: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    languages: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    borders: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currencies: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};