const router = require('express').Router();
const Plate = require('../../models/plate.model');
const Drink = require('../../models/drink.model');

router.get('/', async (req, res) => {
    const drinksAll = await Drink.getAllDrinks();
    const plateAll = await Plate.getAllPlate();

    const menu = { plates: plateAll, drinks: drinksAll }
    res.json(menu)




})






module.exports = router;