const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },


    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    season: {
      type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
      allowNull: true
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: true,

    }
  });
}