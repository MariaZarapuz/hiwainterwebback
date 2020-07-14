const createPlate = (name, category, description, img, price, active, gluten, sesame, lactose, nut, penaut, gmo, egg, fish, crustacean, lupin, mollusk, celery, soya, mustard) => {
    return new Promise((resolve, reject) => {
        db.query('insert into plate(name,category,description,img,price,active,gluten,sesame,lactose,nut,penaut,gmo,egg,fish,crustacean,lupin,mollusk,celery,soya,mustard)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, category, description, img, price, active, gluten, sesame, lactose, nut, penaut, gmo, egg, fish, crustacean, lupin, mollusk, celery, soya, mustard], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    createPlate: createPlate
}