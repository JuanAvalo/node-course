const config = require('/home/juan/projects/config/config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course', config.database_mysql.user, config.database_mysql.password, {
    dialect: 'mysql', 
    host: config.database_mysql.host
});

module.exports = sequelize;