const getAllTables = () => {
    const mesaVacia = 'mesa vacia'
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tables WHERE state != ?', mesaVacia, (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
};

const getByIdTables = (id, token) => {
    console.log(id, 'id2');
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tables WHERE id=? AND token =?', [id, token], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
};




const editState = (state, id) => {
    console.log(state, id);
    return new Promise((resolve, reject) => {
        db.query('update tables set state=? where id=?', [state, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};




module.exports = {
    getAllTables: getAllTables,
    getByIdTables: getByIdTables,
    editState: editState
};