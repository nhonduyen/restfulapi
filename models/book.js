const pool = require('./pool');
module.exports = {
    insert: (isbn, title, author, decription, published_year, publisher) => {
        let sql = 'INSERT INTO BOOK(isbn, title, author, decription, published_year, publisher) VALUES(?,?,?,?,?,?,NOW());';
        return pool.executeQuery(sql, [isbn, title, author, decription, published_year, publisher]);
    },
    update: (isbn, title, author, decription, published_year, publisher) => {
        let sql = 'UPDATE BOOK SET TITLE=?, AUTHOR=?, DESCRIPTION=?, PUBLISHED_YEAR=?,PUBLISHER=?,UPDATED_DATE=NOW() WHERE ISBN=?;';
        return pool.executeQuery(sql, [title, author, decription, published_year, publisher, isbn]);
    },
    deleteBook: (isbn) => {
        return pool.executeQuery('DELETE BOOK WHERE ISBN=?;', isbn);
    },
    deleteAll: () => {
        return pool.executeQuery('TRUNCATE TABLE BOOK;');
    },
    getBook: (isbn) => {
        return pool.executeReader('SELECT * FROM BOOK WHERE ISBN=?;', isbn);
    },
    getBooks: () => {
        return pool.executeReader('SELECT * FROM BOOK;');
    }
}


