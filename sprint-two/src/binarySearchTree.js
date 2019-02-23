var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  //binarySearchTree.root = null;
  //depth

  return binarySearchTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var insertRecursive = function(node){
    if (node.value > value){
      if (node.left===null){
        node.left = newNode;
      } else {
        insertRecursive(node.left);
      }
    } else if (node.value < value){
      if (node.right===null){
        node.right = newNode;
      } else {
        insertRecursive(node.right);
      }
    }
  }
  insertRecursive(this);
};

BinarySearchTree.prototype.contains = function(target) {
    var isFound = false;
    var containsRecursive = function(node){
      if (node.value === target) {
        return true;
      }
      else {
        var left = false;
        var right = false;
        if (node.left) {
          left = containsRecursive(node.left);
        }
        if (node.right) {
          right = containsRecursive(node.right);
        } 
        else {
          return false;  //isFound = false which is returned from calling containsRecursive, go back up the branches
        }
        isFound = isFound || left || right;
      }
      return isFound;
    };
    
  containsRecursive(this);
  return isFound;
};


BinarySearchTree.prototype.depthFirstLog = function(func) {  
  var depthLogRecursive = function(node){
    func(node.value); //works fine, if func = function(value) { array.push(value);}
    //func.call(node); //only works if func = function() { array.push(this.value);}
    if (node.left) {
      depthLogRecursive(node.left);
    } if (node.right) {
      depthLogRecursive(node.right);
    } 
  };
  depthLogRecursive(this);  //this binds to the entire tree when the function is invoked
};



/*
 * Complexity: What is the time complexity of the above functions?
 *  
 * insert() has O(log n) because when traversing, you discard half every time 
 * (it's the opposite of n squared) 
 * 
 * contains() has O(log n) because you discard half the items at every pass
 *
 * depthFirstLog() has O(n) linear time complexity because you must hit every node
 */



//_.identity = function(value) { return value; } //makes non function inputs into functions
// obj.extends(method)
// _.extend(obj, methods)
