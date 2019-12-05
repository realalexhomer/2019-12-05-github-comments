// A SQLite-backed key-value store that wraps keyv: https://github.com/lukechilds/keyv.
// See the repo for full documentation. For type definitions, see
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/keyv/index.d.ts.

const Keyv = require('keyv');

const db = new Keyv('sqlite://db.sqlite3');

/**
 * Takes a string key and returns a promise that resolves with either the value stored for that key
 * or undefined if the key is not in the database.
 */
function get(key) {
  return db.get(key);
}

/**
 * Takes a string key and any value and stores the pair in the database for accessing by key.
 * Returns a promise that resolves to true if the write succeeds.
 */
function set(key, value) {
  return db.set(key, value);
}

/**
 * Takes a string key and deletes the associated key-value pair from the database. Returns a
 * promise.
 */
function del(key) {
  return db.delete(key);
}

/**
 * Clears all of the entries from the database. Returns a promise.
 */
function clear() {
  return db.clear();
}

module.exports = {
  get,
  set,
  del,
  clear,
};
