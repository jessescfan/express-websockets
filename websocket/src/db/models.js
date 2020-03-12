import {DataTypes, Model} from "sequelize";
import sequelize from "./connection";

export class Channel extends Model {}

Channel.init({
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdBy: {
    allowNull: false,
    type: DataTypes.STRING
  },
}, {
  modelName: "channels",
  sequelize
});

export class Topic extends Model {}

Topic.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING
    },
    channelId: {
      allowNull: false,
      references: {
        key: "id",
        model: "channels"
      },
      type: DataTypes.INTEGER.UNSIGNED
    },
  },
  {
    modelName: "topics",
    sequelize
  }
);

export class Score extends Model {}

Score.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING
    },
    topicId: {
      allowNull: false,
      references: {
        key: "id",
        model: "topics"
      },
      type: DataTypes.INTEGER.UNSIGNED
    },
  },
  {
    modelName: "scores",
    sequelize
  }
);