//testing comment again

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    newNode.next = null; //setting our new tail node's pointer
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode; //setting Tail tag to our new tail node
    if (list.head === null) {
      list.head = newNode;    
    }
  };

  list.removeHead = function() {
    var removedNode = list.head;
    list.head = removedNode.next; //move nametag head to next node
    removedNode.next = null;
    return removedNode.value;   
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    }
    var currentNode = list.head;
    var isFound = false;
    var isNotTail = true;
    while (isNotTail && !isFound) {
      if (target === currentNode.value) { 
        isFound = true;
      }
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        isNotTail = false;
      }
    }
    return isFound;    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail - O(1) constant because you have a reference to the tail 
 * (the nametag), only one operation is required per input. 
 * 
 * removeHead - O(1) constant time, same reason as tail (except head nametag)
 *
 * contains - O(n) linear time complexity, because you have a lookup loop.
 */

// input -- target will be anything, a string number (assume not array/obj), could be boolean
// output -- boolean
// constraints -- assume target is simple
// edges cases -- empty list

// Justificiation: function will compare until it finds target value is node's value

