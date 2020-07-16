const getAllPlate = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from plate', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};

const getPlatesByName = () => {
    return new Promise((resolve, reject) => {
        db.query('select name,id, active from plate ', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}


const createPlate = (name, category, description, img, price, active, gluten, sesame, lactose, nut, penaut, gmo, egg, fish, crustacean, lupin, mollusk, celery, soya, mustard) => {
    return new Promise((resolve, reject) => {
        db.query('insert into plate(name,category,description,img,price,active,gluten,sesame,lactose,nut,penaut,gmo,egg,fish,crustacean,lupin,mollusk,celery,soya,mustard)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, category, description, img, price, active, gluten, sesame, lactose, nut, penaut, gmo, egg, fish, crustacean, lupin, mollusk, celery, soya, mustard], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

const updateActive = (active, id) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE plate SET active = ? WHERE id = ?', [active, id], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = {
    createPlate: createPlate,
    getAllPlate: getAllPlate,
    getPlatesByName: getPlatesByName,
    updateActive: updateActive
}