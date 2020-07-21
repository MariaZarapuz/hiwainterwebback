const createTicket = (fk_tables) => {
    console.log(fk_tables, 'ho cansino');
    return new Promise((resolve, reject) => {
        db.query('insert into tickets (fk_tables)values(?)', [fk_tables], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}
const getGroupTable = () => {
    return new Promise((resolve, reject) => {
        db.query('select fk_tables,COUNT (*) FROM tickets GROUP BY fk_tables ', (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    createTicket: createTicket,
    getGroupTable: getGroupTable
}