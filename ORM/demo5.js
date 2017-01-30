var Sequelize = require('sequelize');
var sequelize = require('./helper/seq.js');
const Project = require('./model/project.js');
// update

Project.update({
    status: 3
}, {
    where: {
        status: 2
    }
}).spread(function(affectedCount, affectedRows) {
  console.log(affectedCount, affectedRows);
    return Project.findAll();
}).then(function(tasks) {
    // console.log(tasks) // the 'programming' tasks will both have a status of 'inactive'
})
