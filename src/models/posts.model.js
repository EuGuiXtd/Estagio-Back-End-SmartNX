const PostModel = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      user: DataTypes.STRING(15),
      title: DataTypes.STRING(50),
      text: DataTypes.STRING(300),
    },
    {
        timestamps: false,
    });

    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments',
        });
        };
  
    return Post;
  };
  
  module.exports = PostModel;