'use strict';
module.exports = (sequelize, type) => {
  const UserInterest = sequelize.define('userInterest', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      interest: type.STRING,
      userId: type.INTEGER
    });
  UserInterest.associate = function(models) {
    // associations can be defined here
    UserInterest.belongsTo(models.user, { foreignKey: 'userId' })
  };
  return UserInterest;
};