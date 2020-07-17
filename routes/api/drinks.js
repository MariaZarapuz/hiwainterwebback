
const router = require('express').Router();
const Drink = require('../../models/drink.model');

// GET http://localhost:3000/api/drinks
router.get('/', async (req, res) => {
    const drinksAll = await Drink.getAllDrinks();
    res.json(drinksAll);
});

// GET http://localhost:3000/api/drinks/:id
router.get('/:id', async (req, res) => {
    const drinkById = await Drink.getDrinkById(req.params.id)
    res.json(drinkById);
})

//POST http://localhost:3000/api/drinks/add
router.post('/add', async (req, res) => {
    console.log(req.body)

    const drink = await Drink.createDrink(req.body.name, req.body.type, req.body.category, req.body.price, req.body.active, req.body.description)
    console.log(drink)
});

//PUT http://localhost:3000/api/drinks/edit/:id
router.put('/edit/:id', async (req, res) => {
    console.log(req.body, req.params.id)
    const editDrink = await Drink.editDrinkById(req.body.data, req.params.id)

    if (editDrink['affectedRows'] === 1) {
        const drink = await Drink.getDrinkById(req.params.id);
        res.json(drink);
    } else {
        res.json('No se ha editado correctamente')
    }
});

//PUT http://localhost:3000/api/drinks/updateActive
router.put('/updateActive', async (req, res) => {
    const updateActive = await Drink.updateActive(req.body.active, req.body.id)
    res.json('ok')
});

//Delete http://localhost:3000/api/drinks/delete/:id
router.delete('/delete/:id', async (req, res) => {
    console.log(req.params.id)
    const drinkDelete = await Drink.deleteDrinkById(req.params.id)
    if (drinkDelete['affectedRows'] === 1) {
        res.json('Se ha borrado corectamente')
    } else {
        res.json('No se ha borrado correctamente')
    }
});




module.exports = router;