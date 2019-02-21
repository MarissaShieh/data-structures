var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var data = storage[0];

    if (count === 0) {
      return undefined;
    }
    
    for (var kk = 0; kk < count; kk++) {
        storage[kk] = storage[kk+1];
    }
    count--; 
    delete storage[count];

    return data;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};



// front: null, back: null 

// read https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9
// read https://coderbyte.com/algorithm/implement-a-queue-using-linked-list
// this.data = [];


  // add an element to the back of the queue linked list and update the back pointer. 
  // remove an element by returning the first node in the queue and updating the first pointer.

  // note: an object with numeric keys-- array
  // this is using "dot function"



//read https://stackoverflow.com/questions/19872917/how-to-make-a-dot-function-in-javascript

// var a = {}, 
// or a = function() {}, 
// or a = [], 
// etc.

// a.dotFunction = function() { 
// return 'hi'; 
// }

//console.log(a.dotFunction());

//https://stackoverflow.com/questions/5223/length-of-a-javascript-object









// var node = new Node(value, null);
// if (tail != null) {
//   tail.next = node;
// }
// tail = node;
// if (head === null) {
//   head = node;
// } //if the queue was empty



// var value = head.value;
// head = head.next;
// if (head === null) {
//   tail = null;
// } //if the queue was empty
// return value;


// this.value.length;
// //var count = 0;
// // for (var ii = 0; ii < this.items.length; ii++) {
// //   count++;
// // }
// // while (tail !== null) {
// //   count++;
// //   //traverse queue
// // }
// // return count;