describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
    binarySearchTree2 = BinarySearchTree('c');
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

//Our own unit test
  it('should insert string values at the correct location in the tree', function() {
    binarySearchTree2.insert('a');
    binarySearchTree2.insert('b');
    binarySearchTree2.insert('e');
    binarySearchTree2.insert('d');
    expect(binarySearchTree2.left.right.value).to.equal('b');
    expect(binarySearchTree2.right.left.value).to.equal('d');
  });
  
  

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    // var func = function() { array.push(this.value); };
    //var func2 = function(value) { console.log(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    //binarySearchTree2.depthFirstLog(func2);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  
  
  
  
});
