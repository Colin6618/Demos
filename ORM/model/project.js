var Sequelize = require('sequelize');
var sequelize = require('../helper/seq');

var Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name_cn: {
        type: Sequelize.STRING
    },
    code_uri: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    version: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0'
    },
    testing_version: {
        type: Sequelize.STRING,
        allowNull: false
    },
    testing_md5: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Project;


// CREATE TABLE IF NOT EXISTS `projects` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     -- `product_id` int(11) NOT NULL,
//     `name` varchar(64) NOT NULL,
//     `name_cn` varchar(255),
//     `code_uri` varchar(255),
//     `status` tinyint(2) NOT NULL DEFAULT 0,
//     -- `cdn` varchar(255) NOT NULL,
//     `version` varchar(20) DEFAULT '0',
//     `testing_version` varchar(20) DEFAULT '0',
//     `testing_md5` varchar(32),
//     PRIMARY KEY (`id`)
// ) DEFAULT CHARSET=utf8 AUTO_INCREMENT=10000 ;
