const getAllTables = () => {
    const mesaVacia = 'mesa vacia'
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tables WHERE state != ?', mesaVacia, (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}


module.exports = {
    getAllTables: getAllTables
};