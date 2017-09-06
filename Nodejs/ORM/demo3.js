var Sequelize = require('sequelize');
var sequelize = require('./helper/seq.js');
const Project = require('./model/project.js');

// modulize
// create and build and save
sequelize.sync().then(function() {
  return Project.create({
      name: 'repoA',
      name_cn:'仓库AA',
      code_uri: 'http://*@example.com/repo.git',
      status: 0,
      version: '0.0.2',
      testing_version: '0.0.1'
  });
}).then(function() {
  Project.findOne().then(function(project) {
    console.log(project.get('name'));
  });
});


var prob = Project.build({
  name: 'repoB',
  name_cn:'仓库B',
  code_uri: 'http://*@example.com/repo.git',
  status: 0,
  testing_version: '0.0.1'
});
prob.save().then(function (another) {
  console.log(another.version);
})
