const { DataTypes } = require('sequelize');
const { serialize } = require('superagent');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    // Deberia valdiar que sea exactamente 3
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [3]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      // defaultValue: "Without capital",
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
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




  },
    { timestamps: false, }
  );
};


