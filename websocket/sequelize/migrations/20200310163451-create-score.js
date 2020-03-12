module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("score", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  )
};