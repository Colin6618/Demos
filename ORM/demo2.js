var Sequelize = require('sequelize');
var sequelize = require('./helper/seq');

// define a model and sync
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
sequelize.sync().then(function() {
  return User.create({
    firstName: 'John3',
    lastName: 'Hancock'
  });
}).then(function() {
  User.findOne().then(function(user) {
    console.log(user.get('firstName'));
  });
})
