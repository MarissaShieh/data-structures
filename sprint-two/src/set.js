var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = true;
};

setPrototype.contains = function(item) {
  return this.hasOwnProperty(''+item)? true: false;
};

setPrototype.remove = function(item) {
  delete this[''+item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .add(item): O(1) constant: adding one value into object
 * .contains(item): O(n) linear: need to loop through object and see
 * if target item is there
 *  .remove(item): O(1) constant: delete one value from object
 *
 */
