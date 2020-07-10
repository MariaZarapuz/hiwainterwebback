const jwt = require('jwt-simple');
const moment = require('moment');


const checkToken = (req, res, next) => {
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir la cabecera user-token' })
    }

    const token = req.headers['user-token'];

    let payload = null;
    try {
        payload = jwt.decode(token, 'Clave servidor');
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' })
    }

    const createAt = moment().unix();
    if (createAt > payload.expiredAt) {
        return res.json({ error: 'El token esta caducado' })
    }
    req.payload = payload;

    next();

}

module.exports = {
    checkToken: checkToken
}