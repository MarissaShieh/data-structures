var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
   
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return undefined;
    } 
    
    var data = storage[count-1]; //the element at the top of the stack
    count--;
    delete storage[count];
    return data;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

