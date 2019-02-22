var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;

//newTree.addTree = function () { this.}

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
 */