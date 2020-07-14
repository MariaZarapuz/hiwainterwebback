const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiPlateRouter = require('./api/plates');


router.use('/users', apiUsersRouter);
router.use('/plates', apiPlateRouter);


module.exports = router;