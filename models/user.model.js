const getByCif = pCif => {
    console.log(pCif)
    return new Promise((resolve, reject) => {
        db.query('select * from user where cif=?', [pCif], (err, rows) => {
            if (err) return reject(err);
            if (rows.length === 0) return resolve(null);
            resolve(rows[0])
        });
    });
};

const updateToken = (pToken, pId) => {
    return new Promise((resolve, reject) => {
        db.query('update user set token=? where id=?', [token, id],
            (err, result) => {
                if (err) reject(err);
                resolve(result)
            })
    })
}

module.exports = {
    getByCif: getByCif,
    updateToken: updateToken
}