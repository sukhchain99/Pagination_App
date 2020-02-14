'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    _id: DataTypes.INTEGER(11),
    name: DataTypes.TEXT,
    mob_no: DataTypes.BIGINT(20),
    gender: DataTypes.TEXT('tiny'),
    address: DataTypes.TEXT,
    reg_date: DataTypes.DATE
  }, {});
  User.associate = function(models) {
  };    // associations can be defined here

  return User;
};