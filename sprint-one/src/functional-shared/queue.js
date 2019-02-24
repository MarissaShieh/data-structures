var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = -1;
  someInstance.length = someInstance.index + 1;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.index = this.index + 1;
    this.storage[this.index] = value;
    this.length = this.length + 1;
  }, dequeue: function() {
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
  }, size: function() {
    return this.length;
  }
};
