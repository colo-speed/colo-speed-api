'use strict';
module.exports = (sequelize, type) => {
  const User = sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: type.STRING,
    name: type.STRING,
    birthdate: type.DATE,
    postcode: type.STRING,
    consent: type.BOOLEAN
  })
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.userInterest, {
      foreignKey: 'userId'
    })
  };
  return User;
};