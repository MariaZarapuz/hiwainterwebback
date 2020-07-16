const getAllDrinks = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from drink', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
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
}

module.exports = {
    createDrink: createDrink,
    getAllDrinks: getAllDrinks
}