var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = -1;
  someInstance.length = someInstance.index + 1;
  return someInstance;
};
var stackMethods = {
  push: function(value) {
    this.index = this.index + 1;
    this.storage[this.index] = value;
    this.length = this.length + 1;
  }, pop: function() {
    if (this.length >= 1){
      var value = this.storage[this.index];
      delete this.storage[this.index];
      this.index = this.index - 1;
      this.length = this.length - 1;
      return value;
    }
  }, size: function() {
    return this.length;
  }
};