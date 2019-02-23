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
      if (node.value===target) {
        return true;
      }
      else {
        var left;
        var right;
        if (node.left !== null) {
          console.log("in here");
          left = containsRecursive(node.left);
        } else if (node.left === null) {
          return false;
        } else if (node.right !== null) {
          right = containsRecursive(node.right);
        } else if (node.right === null) {
          return false;
        } 
        console.log("isfound, left, right " + isFound + ", " + left + ", " + right);
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
  