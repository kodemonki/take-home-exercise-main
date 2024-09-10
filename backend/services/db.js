const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.resolve('database.db'), {
  fileMustExist: true
});

function query(sql) {
  return db.prepare(sql).all();
}

module.exports = {
  query
}
