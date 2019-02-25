

// Instantiate a new graph
var Graph = function(value) {
  //var obj = Object.create(Graph.prototype); //done for us because pseudoclassical "new" keyword
  Graph.prototype.directory = {}; //each node value in here
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = {}; 
  newNode.value = value;
  newNode.neighbors = {};
  this.directory[newNode.value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this.directory.hasOwnProperty(''+target)? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  value = ''+value;
  if (this.contains(value)){
    for(let nodeName in this.directory[value].neighbors){
      delete this.directory[nodeName].neighbors[value];
    }
    delete this.directory[value];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  fromValue = ''+fromValue;
  toValue = ''+toValue;
  return this.directory[fromValue].neighbors.hasOwnProperty(toValue);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  fromValue = ''+fromValue;
  toValue = ''+toValue;
  this.directory[fromValue].neighbors[toValue] = this.directory[toValue];
  this.directory[toValue].neighbors[fromValue] = this.directory[fromValue];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  fromValue = ''+fromValue;
  toValue = ''+toValue;
  delete this.directory[fromValue].neighbors[toValue];
  delete this.directory[toValue].neighbors[fromValue];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(func) {
  for(let key in this.directory) {
    func(this.directory[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .addNode(val): constant time O(1) because you just add to Graph's directory {}
 * .contains(val): linear O(1): you loop through Graph.directory to see if specified key exists
 * .removeNode(val): O(n^2): First you loop through Graph.directory to see if the node exists. 
 * If it does, go through and delete the edge b/w the soon-to-be-deleted node and the other nodes. 
 * Note: time complexity is just O(n) if you assume you never get asked to delete a non-existent node
 *
 * .hasEdge(fromVal, toVal): O(n) because you loop through all the edges of the fromNode
 * .addEdge(toVal, fromVal): O(1) just adding a new key:value pair to two objects
 * .removeEdge(toVal, fromVal): O(1) removing key:value pair from two objects
 * .forEachNode(func): O(1) because you have to go through Graph.directory and do the same to each node
 *
 */

