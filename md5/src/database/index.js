const Sequelize = require('sequelize');
const dbConfig = require('../infra/db');

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Produto = require('../models/Produto');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Produto.init(connection);
Endereco.init(connection);



module.exports = connection;