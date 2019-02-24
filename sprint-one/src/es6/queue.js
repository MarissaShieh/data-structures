class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = -1;
    this.length = this.index + 1;
  }

  enqueue(value) {
    this.index = this.index + 1;
    this.storage[this.index] = value;
    this.length = this.length + 1;
  }

  dequeue() {
    var value = this.storage[0];
    if (this.length >= 1) {
      for (let key in this.storage) {
        if (parseInt(key)) {
          key = parseInt(key);
          this.storage[key - 1] = this.storage[key];
        } 
      }
      delete this.storage[-1];
      delete this.storage[this.index];
      this.index = this.index - 1;
      this.length = this.length - 1;
      return value; 
    }
  }

  size() {
    return this.length;
  }
}
