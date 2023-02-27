const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cep: DataTypes.STRING,
            casa: DataTypes.INTEGER
        }, {
            sequelize,
        })
    }

   
}




module.exports = Endereco;