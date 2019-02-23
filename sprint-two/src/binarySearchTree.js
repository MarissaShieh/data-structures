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
      isFound = isFound || recursive check left branch || recursive check right branch
      if (node.left === null){
        node.left = newNode;
      } else {
        containsRecursive(node.left);
      }
      
    }
  }
  containsRecursive(this);
  
  
};


BinarySearchTree.prototype.depthFirstLog = function() {};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// var binarySearchTree = Tree(value);
// console.log("binarySearchTree value: "+binarySearchTree.value);
  