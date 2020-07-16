const router = require('express').Router();
const Table = require('../../models/table.model');

//GET
router.get('/', async (req, res) => {
    const tables = await Table.getAllTables();
    for (const table of tables) {
        if (table.state != 'mesa vacia') {
            res.json(tables);
        } else {
            res.json('No ha mesa para enviar')
        }
    }


})

module.exports = router;