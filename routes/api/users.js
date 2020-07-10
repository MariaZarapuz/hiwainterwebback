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
            console.log(token)
            res.json({ success: token })
        } else {
            res.json('Autentificación fallida')
        }
    } catch (err) {
        console.log(err)
    }

});

const createToken = user => {
    const payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'Clave servidor');
}

router.post('/saveToken', async (req, res) => {
    const result = await User.updateToken(req.body.token, req.body.id)
    console.log(result)
})

module.exports = router;