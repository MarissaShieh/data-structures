

// Instantiate a new graph
var Graph = function(value) {
  //var obj = Object.create(Graph.prototype); //done for us because pseudoclassical "new" keyword
  Graph.prototype.directory = []; //each node value in here
  //^^Make directory an object instead
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = {}; 
  newNode.value = value;
  newNode.neighbors = {};
  this.directory.push(value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  if (this.directory.indexOf(target) >= 0) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(func) {
  //this.directory.forEach(func);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// learn.makerpass recommend reading wiki: https://en.wikipedia.org/wiki/Graph_(abstract_data_type)

