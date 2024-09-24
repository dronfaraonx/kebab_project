'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
  static associate({ User }) {
        this.belongsTo(User, {
          foreignKey: "seller_id",
        });
        this.belongsTo(User, {
          foreignKey: "buyer_id",
        });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    original_price: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    is_paid: DataTypes.BOOLEAN,
    seller_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};