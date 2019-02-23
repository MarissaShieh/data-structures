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
  if(!this) { //catches edge case if there is no node (this = undefined)
    this = newNode;
  } 
  
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

BinarySearchTree.prototype.contains = function() {};


BinarySearchTree.prototype.depthFirstLog = function() {};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// var binarySearchTree = Tree(value);
// console.log("binarySearchTree value: "+binarySearchTree.value);
  