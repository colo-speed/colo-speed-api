'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactMessage = sequelize.define('contactMessage', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    postcode: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  contactMessage.associate = function(models) {
    // associations can be defined here
  };
  return contactMessage;
};