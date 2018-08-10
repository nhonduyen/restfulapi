const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bookstore',
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
});

module.exports = {

    executeReader: (sql, param) => {
        console.log(sql + param);
        pool.query(sql, param, (error, results, fields) => {
            if (error) {
                console.log(error);
                throw error;
            }
            return results;
        });
    },
    executeQuery: (query, param) => {
        pool.execute(sql, param, (error, results, fields) => {
            if (error) {
                console.log(error);
                throw error;
            }
            return results;
        });
    }
}