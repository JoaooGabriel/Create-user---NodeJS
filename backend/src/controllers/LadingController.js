const connection = require('../database/connections');
const crypto = require('crypto-js');

module.exports = {
    async index(req, res) {
        const user = await connection('users').select('*');

        console.log('Servidor Ok');
        return res.json(user);
    },

    async create(req, res) {
        const { id, name, email, password } = req.body;

        await connection('users').insert ({
            id,
            name,
            email,
            password,
        })

        return res.json({ id });
    }
};