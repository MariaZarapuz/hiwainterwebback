
const router = require('express').Router();
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const Drink = require('../../models/drink.model');
const { resolve } = require('path');

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
    const drink = await Drink.createDrink(req.body.name, req.body.type, req.body.category, req.body.price, req.body.active, req.body.description)
    console.log(drink)
    res.json(drink['insertId'])
});

//POST http://localhost:3000/api/drinks/upload/:id
router.post('/upload/:id', upload.single('img'), async (req, res) => {
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
    console.log(req.file.path, 'path');
    let url = req.file.path.split('/')
    let content = 'http://' + req.get('host') + '/' + url[1] + '/' + url[2] + '.' + req.file.mimetype.split('/')[1];
    const insertImg = await Drink.editImg(content, req.params.id)
    res.json('Editado correctamente')

})


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
        const drinksAll = await Drink.getAllDrinks();
        res.json(drinksAll);

    } else {
        res.json('No se ha borrado correctamente')
    }
});




module.exports = router;