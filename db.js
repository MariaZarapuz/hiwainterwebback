const mysql = require('mysql');

exports.connect = () => {
    const pool = mysql.createPool({
        host: '',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'hiWaiter'
    });


    global.db = pool;

}
