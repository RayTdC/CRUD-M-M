const Endereco = require ('../models/Endereco')
const Usuario = require('../models/Usuario')

module.exports = {
    async index(req, res) {
            const enderecos = await Endereco.findAll();
    
            return res.json(enderecos); //retorna todos os endereços
        },

        async show(req, res) {
            const { id } = req.params;
            const endereco = await Endereco.findByPk(id);
          
            if (!endereco) {
              return res.status(400).json({ error: "Endereço não existe" });
            }
          
            return res.json(endereco);
          },
          
        async store(req, res) {
            const { cidade, bairro, cep, casa } = req.body;
    
            const endereco = await Endereco.create({ cidade, bairro, cep, casa })
    
            return res.json(endereco);
        },

    async update(req, res) {
        const { id } = req.params;
        const { cidade, bairro, cep, casa } = req.body;

        const endereco = await Endereco.findByPk(id);

        if (!endereco) {
            return res.status(400).json({ error: 'Falha ao atualizar endereço' });
        }

        const updatedEndereco = await endereco.update({ cidade, bairro, cep, casa });

        return res.json(updatedEndereco);
    },

    async delete(req, res) {
        const { id } = req.params;

        const endereco = await Endereco.findByPk(id);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereço não encontrado' });
        }

        await endereco.destroy();
        return res.send();
    }
}
