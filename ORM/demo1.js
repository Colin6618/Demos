var Sequelize = require('sequelize');
var sequelize = new Sequelize('demo_schema', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5, min: 0, idle: 10000
  }
});

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
sequelize.sync({force: true}).then(function() {
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
}).then(function() {
  User.findOne().then(function(user) {
    console.log(user.get('firstName'));
  });
})
