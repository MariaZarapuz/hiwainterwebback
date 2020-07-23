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


const editImg = (img, id) => {
    return new Promise((resolve, reject) => {
        db.query('update drink set img=? where id=?', [img, id], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

const editDrinkById = ({ name, type, category, price, description }, idDrink) => {
    console.log(name, category, price, description, type, idDrink)
    return new Promise((resolve, reject) => {
        db.query('UPDATE drink SET name= ?,type= ?,category= ?,price= ?,description=? WHERE id = ?', [name, type, category, price, description, idDrink], (err, rows) => {
            console.log(rows)
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
        });
    });
};

const deleteDrinkById = (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM drink WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
}

module.exports = {
    createDrink: createDrink,
    getAllDrinks: getAllDrinks,
    getDrinkById: getDrinkById,
    getDrinksByName: getDrinksByName,
    editDrinkById: editDrinkById,
    editImg: editImg,
    updateActive: updateActive,
    deleteDrinkById: deleteDrinkById
}