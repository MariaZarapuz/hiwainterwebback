const createTicket = (fk_tables, name) => {
    console.log(fk_tables, name);
    return new Promise((resolve, reject) => {
        db.query('insert into tickets (fk_tables,name)values(?,?)', [fk_tables, name], (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
};

const getTicketsByFk_tables = (fk_table) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT id, name FROM tickets WHERE fk_tables=?', fk_table, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
            console.log(rows)
        });
    });
};
const getGroupTable = () => {
    return new Promise((resolve, reject) => {
        db.query('select fk_tables COUNT (*) FROM tickets GROUP BY fk_tables ', (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
};

module.exports = {
    createTicket: createTicket,
    getGroupTable: getGroupTable,
    getTicketsByFk_tables: getTicketsByFk_tables,
}