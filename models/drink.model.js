const getAllDrinks = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from drink', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const getDrinksByName = () => {
    return new Promise((resolve, reject) => {
        db.query('select name, active from drink ', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}


const createDrink = (name, type, category, price, active, description) => {
    return new Promise((resolve, reject) => {
        db.query('insert into drink(name,type,category,price,active,description) values(?,?,?,?,?,?)', [name, type, category, price, active, description], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
};

const updateActive = (active, id) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE drink SET active = ? WHERE id = ?', [active, id], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = {
    createDrink: createDrink,
    getAllDrinks: getAllDrinks,
    getDrinksByName: getDrinksByName,
    updateActive: updateActive
}