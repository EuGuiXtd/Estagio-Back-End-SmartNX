const PostModel = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      user: DataTypes.STRING,
      body: DataTypes.STRING,
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