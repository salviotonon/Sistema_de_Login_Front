export class Storage {
  constructor(storage) {
    this.storage = storage;
  }

  store(key, value) {
    this.storage.setItem(key, value);
  }

  has(key) {
    return !!this.storage.getItem(key);
  }

  get(key) {
    return this.storage.getItem(key);
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}

const storage = new Storage(localStorage);

export { storage };
