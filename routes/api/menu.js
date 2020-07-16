const router = require('express').Router();
const Plate = require('../../models/plate.model');
const Drink = require('../../models/drink.model');

//GET http://localhost:3000/api/menu
router.get('/', async (req, res) => {
    const drinksAll = await Drink.getAllDrinks();
    const platesAll = await Plate.getAllPlate();

    const menu = { plates: platesAll, drinks: drinksAll }
    res.json(menu)

})

//GET http://localhost:3000/api/menu/listUser
router.get('/listProducts', async (req, res) => {
    const drinksfilter = await Drink.getDrinksByName();
    const platesfilter = await Plate.getPlatesByName();
    const listmenu = {
        plates: platesfilter,
        drinks: drinksfilter
    }
    res.json(listmenu)

})






module.exports = router;