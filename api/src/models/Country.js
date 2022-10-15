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
      // get(){
      //   let value = this.getDataValue('code');
      //   return value ? `API-${value}`: null;
      // }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      // get() {
      //   let value = this.getDataValue('image');
      //   return value.split('|;|');
      // }
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
      type: DataTypes.STRING
    },
    timezones: {
      type: DataTypes.STRING,
      // get() {
      //   let value = this.getDataValue('timezones');
      //   return value.split('|;|');
      // }
    }
  });
};