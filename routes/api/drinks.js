
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

router.put('/edit/:id', async (req, res) => {
    const editDrink = await Drink.updateActive(req.body, req.params.id)
    console.log(editDrink)
    if (editDrink['affectedRows'] === 1) {
        console.log(editDrink['insertId'])

        /*  const plate = await Drink.getDrinkById(editDrink['insertId'])
         res.json(plate) */
    } /* else {
        res.json('No se ha editado')
    } */

});

//PUT http://localhost:3000/api/drinks/updateActive
router.put('/updateActive', async (req, res) => {
    const updateActive = await Drink.updateActive(req.body.active, req.body.id)
    res.json('ok')
});




module.exports = router;