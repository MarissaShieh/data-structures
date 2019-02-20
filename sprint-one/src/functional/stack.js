var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = -1;
  var length = index + 1;

  // Implement the methods below
  someInstance.push = function(value) {
    index = index + 1;
    storage[index] = value;
    length = length + 1;
  };

  someInstance.pop = function() {
    if (length>=1){
    var value = storage[index];
    delete storage[index];
    index = index - 1;
    length = length - 1;
    return value;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
