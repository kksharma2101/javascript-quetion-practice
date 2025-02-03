class Stack(list): #do extending, extending means inheritance
    def is_empty(self):
        return len(self) == 0

    def push(self, data):
        self.append(data)
        
    def pop(self):
        if not self.is_empty():
            super().pop()
        else:
            raise IndexError('Stack is empty')
        
    def peek(self):
        if not self.is_empty():
            return self[-1]
    
    def size(self):
        if not self.is_empty():
            return len(self)

    def insert(self, index, object):
        raise AttributeError("you can't insert")

obj = Stack()
obj.push(21)
obj.push(45)
obj.push(89)
# obj.insert(3,10)
# print(obj.pop())
print(obj.peek())
print(obj.size())