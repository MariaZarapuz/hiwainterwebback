
const router = require('express').Router();
const Drink = require('../../models/drink.model');

// GET http://localhost:3000/api/drinks
router.get('/', async (req, res) => {
    const drinksAll = await Drink.getAllDrinks();
    res.json(drinksAll);
});

//POST http://localhost:3000/api/drinks/add
router.post('/add', async (req, res) => {
    console.log(req.body)

    const drink = await Drink.createDrink(req.body.name, req.body.type, req.body.category, req.body.price, req.body.active, req.body.description)
    console.log(drink)

});




module.exports = router;