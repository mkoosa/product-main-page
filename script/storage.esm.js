class Storage {
  constructor() {
    this.storage = sessionStorage;
  }
  setStorage(key, value) {
    return this.storage.setItem(key, JSON.stringify(value));
  }
  getItemStorage(key) {
    return JSON.parse(this.storage.getItem(key));
  }
  clearStorage() {
    this.storage.clear();
  }
}

export { Storage };
