var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = -1;
  var length = index + 1;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    index = index + 1;
    storage[index] = value;
    length = index + 1;
  };

  someInstance.dequeue = function() {
    var value;
    if (length>1){
      value = storage[0];
      delete storage[0];
      for(let key in storage){
        storage[key-1] = storage[key];
      }
      delete storage[index];
      length = length - 1;
      index = index - 1;
    } else if (length === 1){
      value = storage[0];
      delete storage[0];
      length = length - 1;
      index = index - 1;
    }
    return value;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};