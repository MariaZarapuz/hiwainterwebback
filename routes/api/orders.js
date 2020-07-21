const router = require('express').Router();
const Order = require('../../models/order.model');

// POST http://localhost:3000/api/orders/add
router.post('/add', async (req, res) => {
    console.log(req.body);
    const listOrder = req.body.order

    for (const order of listOrder) {

        if (order.category === 'drink') {
            let orderDrink = await Order.createOrderFk_drinks(order.quantity, order.fk, order.ticket)

        } else {
            let orderPlate = await Order.createOrderFk_plates(order.quantity, order.description, order.fk, order.ticket)



        }
    }
    res.json('pedido recibido')

})

module.exports = router;