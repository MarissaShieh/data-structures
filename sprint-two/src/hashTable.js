var HashTable = function() {
  //HashTable is an object, called pseudoclassical style
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //our storage array is object[_storage]'s value
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.hasOwnProperty(index)) {
    var emptyBucket = [];
    this._storage.set(index, emptyBucket);
  }
  var tuple = [k,v];
  this._storage[index].push(tuple);
  //needs to loop and overwrite old string / value
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
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


