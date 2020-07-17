const getAllDrinks = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from drink', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
};


const getDrinkById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from drink where id=?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const getDrinksByName = () => {
    return new Promise((resolve, reject) => {
        db.query('select name,id,category, active from drink ', (err, rows) => {
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

const editDrinkById = ({ name, type, category, price, description }, idDrink) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE drink SET name= ?,type= ?,category= ?,price= ?,description WHERE id = ?', [name, type, category, price, description, idDrink], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })


}

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
    getDrinkById: getDrinkById,
    getDrinksByName: getDrinksByName,
    editDrinkById: editDrinkById,
    updateActive: updateActive
}