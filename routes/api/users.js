const router = require('express').Router();
const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')
const moment = require('moment')
const jwt = require('jwt-simple')

router.post('/login', async (req, res) => {
    console.log(req.body.cif)

    try {
        const user = await User.getByCif(req.body.cif)
        if (!user) {
            res.json('Autentificación fallida')
        }

        const same = bcrypt.compareSync(req.body.password, user.password);
        console.log(same)
        if (same) {
            let token = createToken(user);
            res.json({ success: token })
        } else {
            res.json('Autentificación fallida')
        }
    } catch{
        console.log(err)
    }

});

const createToken = user => {
    const payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(1, 'day').unix()
    }

    return jwt.encode(payload, process.env.SECRET_KEY);
}

module.exports = router;