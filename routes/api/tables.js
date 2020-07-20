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
});

router.put('/editState', async (req, res) => {

    const tableEdit = await Table.editState(req.body.status, req.body.id)

    res.json('Modificado correctamente')
})

module.exports = router;