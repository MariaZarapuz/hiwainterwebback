const router = require('express').Router();
const Plate = require('../../models/plate.model');

// GET http://localhost:3000/api/plates
router.get('/', async (req, res) => {
    const plateAll = await Plate.getAllPlate();
    res.json(plateAll);
});

// POST http://localhost:3000/api/plates/add
router.post('/add', async (req, res) => {
    console.log(req.body)
    const plate = await Plate.createPlate(req.body.name, req.body.category, req.body.description, req.body.img, req.body.price, req.body.active, req.body.allengen['gluten'], req.body.allengen['sesame'], req.body.allengen['lactose'], req.body.allengen['nuts'], req.body.allengen['penaut'], req.body.allengen['gmo'], req.body.allengen['egg'], req.body.allengen['fish'], req.body.allengen['crustacean'], req.body.allengen['lupin'], req.body.allengen['mollusks'], req.body.allengen['celery'], req.body.allengen['soya'], req.body.allengen['mustard'])
    res.json('ok');
});
module.exports = router;