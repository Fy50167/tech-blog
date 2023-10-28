const User = require('./User');
const Post = require('./Post');


// Every stock only belongs to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
  
// A user can have multiple stocks
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Post,
  };