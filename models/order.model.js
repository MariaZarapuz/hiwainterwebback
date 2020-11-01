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

const getOrdersByFKTicket = (fk_tickets) => {
    return new Promise((resolve, reject) => {
        db.query('select * from orders where fk_tickets =?', [fk_tickets], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    })
};
const getOrderByPlate = (fk_plate) => {

    return new Promise((resolve, reject) => {
        db.query('select orders.fk_tickets, orders.server, orders.prepared, orders.quantity,orders.fk_plate, plate.name, plate.price,plate.category from orders,plate where plate.id =? and plate.id = fk_plate', [fk_plate], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
};

const getOrderByDrink = (fk_drink) => {

    return new Promise((resolve, reject) => {
        db.query('select orders.fk_tickets, orders.server, orders.prepared, orders.quantity,orders.fk_drink, drink.name, drink.price,drink.category from orders,drink where drink.id =? and drink.id = fk_drink', [fk_drink], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

/* recoger plate = 'SELECT orders.fk_tickets, orders.server, orders.prepared, orders.quantity,orders.fk_plate, plate.name, plate.price FROM orders, plate WHERE plate.id= 8 and plate.id= fk_plate' */


module.exports = {
    createOrderFk_plates: createOrderFk_plates,
    createOrderFk_drinks: createOrderFk_drinks,
    getOrdersByFKTicket: getOrdersByFKTicket,
    getOrderByPlate: getOrderByPlate,
    getOrderByDrink: getOrderByDrink
}