const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiMenuRouter = require('./api/menu');
const apiPlatesRouter = require('./api/plates');
const apiDrinksRouter = require('./api/drinks');



router.use('/users', apiUsersRouter);
router.use('/menu', apiMenuRouter);
router.use('/plates', apiPlatesRouter);
router.use('/drinks', apiDrinksRouter);



module.exports = router;