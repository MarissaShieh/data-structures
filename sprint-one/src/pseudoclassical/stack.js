var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = -1;
  this.length = this.index + 1;
};
Stack.prototype.push = function(value) {
  this.index = this.index + 1;
  this.storage[this.index] = value;
  this.length = this.length + 1;
};
Stack.prototype.pop = function() {
  if (this.length >= 1){
    var value = this.storage[this.index];
    delete this.storage[this.index];
    this.index = this.index - 1;
    this.length = this.length - 1;
    return value;
  }
};
Stack.prototype.size = function() {
  return this.length;
};