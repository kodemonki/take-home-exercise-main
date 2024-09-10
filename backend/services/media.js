const db = require('./db');

function getData() {
  const rows = db.query('SELECT * FROM Media');
  return rows;
}

module.exports = {
  getData
}
