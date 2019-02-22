var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var leaf = Tree(value);
  this.children.push(leaf);
};

treeMethods.contains = function(target) {
  var isFound = false;
  if(target === this.value){
    return true;
  }
  if(this.children.length===0) {
    return false;   
  } 
  for(let i = 0; i<this.children.length; i++) {
    isFound = isFound || this.children[i].contains(target);
  }
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * .addChild() has O(1) constant time complexity because for each input value
 * you do a constant number of operations. Creating a new node is O(1). Pushing
 * to the children array is also O(1).
 * 
 *  .contains() has O(n) linear time complexity because a for loop has O(n).
 *  Recursion adds execution contexts, but doesn't increase the order of magnitude.
 *  It will only 2n 4n 10n
 * 
 */