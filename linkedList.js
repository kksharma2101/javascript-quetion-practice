// Singly linked list work only forward (accending oder) direction, if we want to back so we will start , start node.

// Define a class Node to describe a node of a Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// console.log(Node.self)
// # Define a class SLL to implement Singly linked list with __init__() method to create and initialise start reference variable
class SLL {
  constructor() {
    this.start = null;
  }

  // # Define a method is_empty() to checked if the linked list is empty in SLL class.
  is_empty() {
    if (this.start !== null) {
      alert("Please empty the stack");
    }
    return (this.start = null);
  }

  // # Define a method insert_at_start() to insert an element at the starting of the list.
  insert_at_start(data) {
    let n = Node(data, this.start);
    this.start = n;
  }
}

let obj = new SLL(start = null)

console.log(obj)
// # Define a method insert_at_start() to insert an element at the starting of the list.

// # Define a method search() to find the node with specified element value.

// # Define a method insert_after() to insert a new node after a given node of the list.

// # Define a method to print_all() the elements of the list.

// # Define a method delete_first() to delete first element from the list.

// # Define a method delete_last() to delete last element from the list.

// # Define a method delete_item() to delete specified element from the list.

// # Implement for iterator for SLL to access all the elements of list in a sequence.
