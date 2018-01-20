import sqlite3 from 'sqlite3';

let sqliteDb = sqlite3.verbose();
let db = new sqliteDb.Database('database.sqlite');

export default db;

process.on('SIGINT', () => {
    db.close();
});
