const Produto = require('../models/Produto');
const Usuario = require('../models/Usuario')

module.exports = {
    async index(req, res) {
            const produtos = await Produto.findAll();
    
            return res.json(produtos); //retorna todos os produtos
        },     

        async show(req, res) {
            const { id } = req.params;
            const produto = await Produto.findByPk(id);
          
            if (!produto) {
              return res.status(400).json({ error: "Funcionário não existe" });
            }
          
            return res.json(produto);
          },

        async store(req, res) {
            const { nome, descricao, valor } = req.body;
    
            const produto = await Produto.create({ nome, descricao, valor })
    
            return res.json(produto);
        },

    async update(req, res) {
        const { id } = req.params;
        const { nome, descricao, valor } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ error: 'Falha ao atualizar produto' });
        }

        const updatedProduto = await produto.update({ nome, descricao, valor });

        return res.json(updatedProduto);
    },

    async delete(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        await produto.destroy();
        return res.send();
    }
}
