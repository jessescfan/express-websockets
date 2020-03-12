module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("topics", {
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
      channelId: {
        allowNull: false,
        references: {
          key: "id",
          model: "channels"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
    },
    {
      charset: "utf8"
    }
  )
};