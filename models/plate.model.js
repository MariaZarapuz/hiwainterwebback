const getAllPlate = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from plate where active = 1', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};

const getPlateById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from plate where id=?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const getPlatesByName = () => {
    return new Promise((resolve, reject) => {
        db.query('select name,id, category,active from plate ', (err, rows) => {
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
};

const editPlateById = ({ name, category, description, img, price, active, gluten, sesame, lactose, nuts, penaut, gmo, egg, fish, crustacean, lupin, mollusks, celery, soya, mustard }, idPlate) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE plate SET name = ?, category = ?, description = ?, img = ?, price = ?, active = ?, gluten = ?, sesame = ?, lactose = ?, nuts = ?, penaut = ?, gmo = ?, egg = ?, fish = ?, crustacean = ?, lupin = ?, mollusks = ?, celery = ?, soya = ?, mustard = ? WHERE id = ?', [name, category, description, img, price, active, gluten, sesame, lactose, nuts, penaut, gmo, egg, fish, crustacean, lupin, mollusks, celery, soya, mustard, idPlate], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        });
    });
};

const updateActive = (active, id) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE plate SET active = ? WHERE id = ?', [active, id], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        });
    });
};

const deletePlateById = (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM plate WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
}

module.exports = {
    createPlate: createPlate,
    getAllPlate: getAllPlate,
    getPlateById: getPlateById,
    getPlatesByName: getPlatesByName,
    editPlateById: editPlateById,
    updateActive: updateActive,
    deletePlateById: deletePlateById
}