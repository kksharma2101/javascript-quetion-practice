#  Define a class Node to describe a node of a Singly Linked List.
class Node: 
  def __init__(self, item=None, next=None):
    self.item = item
    self.next = next

# Define a class SLL to implement Singly linked list with __init__() method to create and initialise start reference variable
class SLL:
  def __init__(self, start=None):
    self.start = start
  
# Define a method is_empty() to checked if the linked list is empty in SLL class.
  def is_empty(self):
    if self.start != None:
      self.start == None
      return
    
# Define a method insert_at_start() to insert an element at the starting of the list.
  def insert_at_start(self, item):
    n=Node(item, self.start)
    self.start=n
 
# Define a method insert_at_last() to insert an element at the last of the list.
  def insert_at_last(self, value):
    new_node = Node(value)
    if self.start is None:  # Handle empty list case
        self.start = new_node
        return
    temp = self.start
    while temp.next is not None:  # Traverse to the last node
        temp = temp.next
    temp.next = new_node  # Link the new node at the end


# Define a method search() to find the node with specified element value.
  def search(self, item):
    if not self.is_empty():
      temp = self.start
      while temp.next != None:
        if temp.item == item:
          return temp
        temp = temp.next
    else:
      return None

# Define a method insert_after() to insert a new node after a given node of the list.
  def insert_after(self, temp, data):
    if temp is not None:
      n=Node(data, temp.next)
      temp.next = n

# Define a method to print_all() the elements of the list.
  def print_all(self):
    temp=self.start
    while temp is not None:
      print(temp.item)
      temp=temp.next

# Define a method delete_first() to delete first element from the list.
  def delete_first(self):
    if not self.is_empty():
      self.start=self.start.next

# Define a method delete_last() to delete last element from the list.
  def delete_last(self):
    if self.start == None:
      pass
    elif self.start.next ==None:
      return None
    temp=self.start
    while temp.next.next is not None:
      temp=temp.next
    temp.next=None

# Define a method delete_item() to delete specified element from the list.
  def delete_item(self, item):
    if self.start == None:
      pass
    elif self.start.next is None:
      if self.start.item is item:
        self.start = None
    else:
      temp=self.start
      while temp.next is not None:
        if temp.next.item is item:
          temp.next=temp.next.next
          break
        temp=temp.next

  def __iter__(self):
    return SllIterator(self.start)
# In class SLL, implement iterator for SLL to access all the elements of list in a sequence.
class SllIterator:
  def __init__(self, start):
    self.current = start

  def __iter__(self):
    return self
  def __next__(self):
    if self.current is None:
      raise StopIteration
    data=self.current.item
    self.current=self.current.next
    return data


# obj=SLL()
# obj.insert_at_last(15)
# # obj.insert_at_last(15)
# obj.insert_at_start(105)
# # obj.insert_at_start(105)
# obj.insert_at_last(205)
# # obj.delete_first()
# obj.delete_last()
# obj.insert_after(obj.search(15),300)
# obj.delete_item(300)
# obj.print_all()
# for x in obj:
#   print(x, end=' ')