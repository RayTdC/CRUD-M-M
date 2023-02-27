const User = require('../models/Usuario');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users); //retorna todos os usuarios
    },

    async show(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
      
        if (!user) {
          return res.status(400).json({ error: "Usuário não existe" });
        }
      
        return res.json(user);
      },

    async store(req, res) {
        const { nome, email, senha } = req.body;

        const user = await User.create({ nome, email, senha })

        return res.json(user);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Falha ao atualizar usuário' });
        }

        const updatedUser = await user.update({ nome, email, senha });

        return res.json(updatedUser);
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();
        return res.send();
    }
}
