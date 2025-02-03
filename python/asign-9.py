class Node:
    def __init__(self, item=None, next=None):
        self.item = item
        self.next = next

class Stack:
    def __init__(self):
        self.start = None
        self.item_count = 0
    
    def is_empty(self):
        return self.start == None
    
    def push(self, data):
        n = Node(data, self.start)
        self.start = n
        self.item_count += 1
    
    def pop(self):
        if not self.is_empty():
            self.start = self.start.next
            self.item_count -= 1
        else:
            raise IndexError('stack is empty')

    def peek(self):
        return self.start.item

    def size(self):
        return self.item_count

obj = Stack()
obj.push(89)
obj.push(19)
obj.push(30)
print(obj.size())
print(obj.peek())