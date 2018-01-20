import db from './db';

export let getList = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM products", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

export let getItem = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM products WHERE id = " + id, (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
}

export let productDbo = {
  getList,
  getItem
};
