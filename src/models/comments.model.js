const CommentModel = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      user: DataTypes.STRING,
      body: DataTypes.STRING,
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