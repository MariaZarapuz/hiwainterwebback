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
    const idTable = await Table.searchIdTable(req.params.mesa)
    let fk_table;
    idTable.map(res => {
        fk_table = res.id
        return fk_table
    });

    let orders;
    const tickets = await Ticket.getTicketsByFk_tables(fk_table)

    tickets.map(async res => {
        orders = await Order.getOrdersByFKTicket(res.id)
        orders.map(async res => {
            const commant = await Order.getOrderByPlate(res.fk_plate)
            commant.map(res => {
                console.log(res);
            })
        })


    })
    const arrayMesa = new Array(orders)


})


router.get('/commant/:plate', async (req, res) => {
    const commant = await Order.getOrderByPlate(req.params.plate)
    console.log(commant);
    res.json(commant)
})
module.exports = router;