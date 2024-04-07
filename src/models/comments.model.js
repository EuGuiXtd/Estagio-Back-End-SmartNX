const CommentModel = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      user: DataTypes.STRING(15),
      text: DataTypes.STRING(300),
    },
    {
        timestamps: false,
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            onDelete: 'CASCADE',
        });
    }
  
    return Comment;
  };
  
  module.exports = CommentModel;