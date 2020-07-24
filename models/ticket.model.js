const createTicket = (fk_tables) => {
    console.log(fk_tables, 'ho cansino');
    return new Promise((resolve, reject) => {
        db.query('insert into tickets (fk_tables)values(?)', [fk_tables], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

const getTicketsByFk_tables = (fk_table) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT id FROM tickets WHERE fk_tables=?', fk_table, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
            console.log(rows)
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
    getGroupTable: getGroupTable,
    getTicketsByFk_tables: getTicketsByFk_tables,
}