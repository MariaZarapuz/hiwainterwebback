
const router = require('express').Router();
const Ticket = require('../../models/ticket.model');

router.get('/table', async (req, res) => {
    const total = await Ticket.getGroupTable();
    res.json('todo coorrecto', total);
});

router.get('/table/:fk_tables', async (req, res) => {
    const tickets = await Ticket.getTicketsByFk_tables(req.params.fk_tables)
    res.json(tickets);
});



router.post('/add', async (req, res) => {
    let quantity = req.body.quantity
    console.log(quantity);
    for (let index = 0; index < quantity; index++) {
        console.log('tickets', index);
        let ticket = await Ticket.createTicket(req.body.id, req.body.arrayName[index])
    }

    res.json('Tickets insertado')
})


module.exports = router;
