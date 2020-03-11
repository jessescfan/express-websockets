import {DataTypes, Model} from "sequelize";
import sequelize from "./connection";

export class Channel extends Model {}

Channel.init({
  name: {
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