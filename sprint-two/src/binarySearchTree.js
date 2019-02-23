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
        if (node.left !== null) {
          left = containsRecursive(node.left);
        }
        if (node.right !== null) {
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


BinarySearchTree.prototype.depthFirstLog = function() {};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// var binarySearchTree = Tree(value);
// console.log("binarySearchTree value: "+binarySearchTree.value);
  