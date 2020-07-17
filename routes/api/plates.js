const router = require('express').Router();
const Plate = require('../../models/plate.model');

// GET http://localhost:3000/api/plates
router.get('/', async (req, res) => {
    const plateAll = await Plate.getAllPlate();
    res.json(plateAll);
});

// GET http://localhost:3000/api/plates/:id
router.get('/:id', async (req, res) => {
    const plateById = await Plate.getPlateById(req.params.id)
    res.json(plateById);
})


// POST http://localhost:3000/api/plates/add
router.post('/add', async (req, res) => {
    const body = req.body
    console.log(body)
    const plate = await Plate.createPlate(body.name, body.category, body.description, body.img, body.price, body.active, body.allengen['gluten'], body.allengen['sesame'], body.allengen['lactose'], body.allengen['nuts'], body.allengen['penaut'], body.allengen['gmo'], body.allengen['egg'], body.allengen['fish'], body.allengen['crustacean'], body.allengen['lupin'], body.allengen['mollusks'], body.allengen['celery'], body.allengen['soya'], body.allengen['mustard'])
    res.json('ok');
});

//PUT http://localhost:3000/api/plates/edit/:id
router.put('/edit/:id', async (req, res) => {
    console.log(req.body)
    const plateEdit = await Plate.editPlateById(req.body.data, req.params.id)
    if (plateEdit['affectedRows'] === 1) {
        const plate = await Plate.getPlateById(req.params.id);
        res.json(plate);
    } else {
        res.json('No se ha editado correctamente')
    }
})

//PUT http://localhost:3000/api/plates/updateActive
router.put('/updateActive', async (req, res) => {
    console.log(req.body)
    const updateActive = await Plate.updateActive(req.body.active, req.body.id)
    console.log(updateActive)
    res.json('ok')
});

//Delete http://localhost:3000/api/plates/delete/:id
router.delete('/delete/:id', async (req, res) => {
    console.log(req.params.id)
    const plateDelete = await Plate.deletePlateById(req.params.id)
    if (plateDelete['affectedRows'] === 1) {
        res.json('Se ha borrado corectamente')
    } else {
        res.json('No se ha borrado correctamente')
    }
})


module.exports = router;