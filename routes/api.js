const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiMenuRouter = require('./api/menu');
const apiPlatesRouter = require('./api/plates');
const apiDrinksRouter = require('./api/drinks');
const apiTablesRouter = require('./api/tables');
const apiTicketsRouter = require('./api/tickets');
const apiOrdersRouter = require('./api/orders');


router.use('/users', apiUsersRouter);
router.use('/menu', apiMenuRouter);
router.use('/plates', apiPlatesRouter);
router.use('/drinks', apiDrinksRouter);
router.use('/tables', apiTablesRouter);
router.use('/tickets', apiTicketsRouter);
router.use('/orders', apiOrdersRouter);




module.exports = router;