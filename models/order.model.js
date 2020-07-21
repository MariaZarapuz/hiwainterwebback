const createOrderFk_plates = (quantity, description, fk_plates, fk_tickets) => {
    return new Promise((resolve, reject) => {
        db.query('insert into orders (quantity,description,fk_plate,fk_tickets) values (?,?,?,?)', [quantity, description, fk_plates, fk_tickets], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const createOrderFk_drinks = (quantity, fk_drink, fk_tickets) => {
    return new Promise((resolve, reject) => {
        db.query('insert into orders (quantity,fk_drink,fk_tickets) values (?,?,?)', [quantity, fk_drink, fk_tickets], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    createOrderFk_plates: createOrderFk_plates, createOrderFk_drinks: createOrderFk_drinks
}