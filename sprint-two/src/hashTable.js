var HashTable = function() {
  //HashTable is an object, called pseudoclassical style
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //our storage array is object[_storage]'s value
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined) {
    var emptyBucket = [];
    this._storage.set(index, emptyBucket);
  }
  var doesntHaveThisKey = true;
  for(let i = 0; i < this._storage.get(index).length; i++){
    if(this._storage.get(index)[0] === k) {
      doesntHaveThisKey = false;
      this._storage[index][1] = v;
    }
  }
  if(doesntHaveThisKey) {
    var tuple = [k,v];
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;
  var bucket = this._storage.get(index);
  for(let i = 0; i<bucket.length; i++){
    if(bucket[i][0]===k){
      value = bucket[i][1];
    }
  }
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)) {
    for(let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k){
        this._storage.get(index)[i][1] = undefined; 
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .insert: worst case: O(n) if everything ended up in the same spot in the array
 * ^However, assuming an average case and good hash function, O(1)
 *
 * .retrieve: also worst case O(n) for same reason as .insert's. Average case O(1)
 * .remove: same as above. Worse case O(n), average case O(1)
 *
 */


