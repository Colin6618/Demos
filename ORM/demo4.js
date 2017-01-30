var Sequelize = require('sequelize');
var sequelize = require('./helper/seq.js');
const Project = require('./model/project.js');
// Building a non-persistent instance
// update a row
var prob = Project.build({
  name: 'repoC',
  name_cn:'仓库C',
  code_uri: 'http://hanyuzhi@git.hz.meizu.com/scm/fe/store-j.git',
  status: 0,
  testing_version: '0.0.2'
});

prob.save().then(function (another) {
  return another.update({
    testing_version: '0.1.1'
  })
}).then(function (ano) {
  console.log(ano.id);
  // ano.destroy();
});
