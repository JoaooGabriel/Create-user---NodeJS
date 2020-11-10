const connection = require('../database/connections');

module.exports = {
    async index(req, res) {
        const boletos = await connection('boletos')
        .join('users', 'users.id', '=', 'boletos.user_id')
        .select(['boletos.*',
                 
                ]);

        console.log('Servidor Ok');
        return res.json(boletos);
    },

    async create(req, res) {
        const { value_total, value_parcelas, date_vencimento, payd_status } = req.body;
        const user_id = req.headers.authorization;

        const [ id ] = await connection('boletos').insert ({
            value_total,
            value_parcelas,
            date_vencimento,
            payd_status,
            user_id
        });

        return res.json({ id });
    }
};