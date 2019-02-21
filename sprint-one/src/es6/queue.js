class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

    enqueue (value) {
      this.storage[this.count] = value;
      this.count++;
    }

    dequeue () {
      var data = this.storage[0];

      if (this.count === 0) {
        return undefined;
      }
      
      for (var kk = 0; kk < this.count; kk++) {
          this.storage[kk] = this.storage[kk+1];
      }
      this.count--; 
      delete this.storage[this.count];
  
      return data;
    }
    
    size () {
      return this.count;
    }


}
