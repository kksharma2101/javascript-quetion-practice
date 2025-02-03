from python.sll import *

class Stack:
    def __init__(self):
        self.myList = SLL()
        self.count = 0

    def is_empty(self):
        return self.myList.is_empty()

    def push(self, data):
        self.myList.insert_at_start(data)
        self.count += 1

    def pop(self):
        self.myList.delete_first()
        self.count -= 1

    def peek(self):
        if not self.is_empty():
            return self.myList.start.item

    def size(self):
        return self.count

obj = Stack()
obj.push(200)
obj.push(400)
obj.push(500)
print(obj.size())
print(obj.peek())