class Stack:
    def __init__(self):
        self.item=[]

    def is_empty(self):
        return len(self.item) == 0

    def push(self, data):
        self.item.append(data)

    def pop(self):
        if not self.is_empty():
            return self.item.pop()
        else:
            raise IndexError('Stack is empty')

    def peek(self):
        if not self.is_empty():
            print(self.item[-1])
        else:
            raise IndexError('Stack is empty')
    
    def size(self):
        if not self.is_empty():
            print(len(self.item))

obj = Stack()
obj.push(48)
obj.push(89)
obj.push(208)
obj.pop()
obj.peek()
obj.size()