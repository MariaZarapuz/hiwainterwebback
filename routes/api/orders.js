const router = require('express').Router();
const Order = require('../../models/order.model');
const Drink = require('../../models/drink.model');
const Ticket = require('../../models/ticket.model');
const Table = require('../../models/table.model');
const Plate = require('../../models/plate.model');

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


router.get('/:mesa', async (req, res) => {
    const tickets = await Ticket.getTicketsByFk_tables(req.params.mesa)
    console.log(tickets);
    let arrayMesa = new Array();
    let orders
    let order = []

    for (let ticket of tickets) {
        orders = await Order.getOrdersByFKTicket(ticket.id)
        orders.map(async (res) => {
            if (res.fk_drink) {
                console.log('no entra sii ', res.fk_drink);
                
                /*  const name = await Drink.getDrinkById(res.fk_drink)
                 console.log(res, name[0].name, name[0].price)
                 order.push(res)
                 order.name = name[0].name
                 order.price = name[0].price
                 console.log(order, 'final') */
            } else {
                console.log('eres comida', res.fk_plate);
            }
        })

    }


    await res.json(order)
})

module.exports = router;