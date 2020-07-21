
const router = require('express').Router();
const Ticket = require('../../models/ticket.model');

router.get('/table', async (req, res) => {
    const total = await Ticket.getGroupTable();
    console.log(total);
})

router.post('/add', async (req, res) => {
    console.log('hola', req.body)
    let quantity = req.body.quantity
    console.log(quantity);
    for (let index = 1; index <= quantity; index++) {
        console.log('tickets', index);
        let ticket = await Ticket.createTicket(req.body.id)
        console.log(ticket);
    }
})


module.exports = router;
