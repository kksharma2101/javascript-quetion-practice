class Node:
    def __init__(self, item = None, next = None):
        self.item = item
        self.next = next

class Sll:
    def __init__(self, start = None):
        self.start = start
        
    def is_empty(self):
        return self.start == None
    
    def insert_start(self, item):
        n = Node(item, self.start)
        self.start = n
    
    def insert_last(self, item):
        n = Node(item)
        if not self.is_empty():
            temp = self.start
            while temp.next is not None:
                temp = temp.next
            temp.next = n
        else:
            self.start = n
       
    def search(self, item):
        if self.is_empty():
            pass
        else:
            temp = self.start
            while temp.next is not None:
                if temp.item is item:
                    return temp
                else:
                    temp=temp.next
    
    def insert_after(self, node, item):
        n = Node(item)
        if self.is_empty():
            pass
        else:
            temp = self.start
            while temp is not None:
                if temp.item is node:
                    n.next = temp.next
                    temp.next = n
                    break
                else:
                    temp = temp.next
                    
    def print_all(self):
        temp = self.start
        while temp is not None:
            print(temp.item, end=" ")
            temp = temp.next
            
    def delete_first(self):
        if self.is_empty():
            pass
        else:
            self.start = self.start.next
    
    def delete_last(self):
        if self.is_empty():
            pass
        elif self.start.next is None:
            self.start = None
        else:
            temp = self.start
            while temp.next.next is not None:
                temp = temp.next
            temp.next = None
    
    def delete_item(self, data):
        if self.is_empty():
            pass
        elif self.start.next is None:
            if self.start.item is data:
                self.start = None
        else:
            temp = self.start
            if temp.item is data:
                self.start = temp.next
            while temp.next is not None:
                if temp.next.item is data:
                    temp.next = temp.next.next
                    break
                temp = temp.next
          
    def __iter__(self):
        return Sll_iterator(self.start)
                
class Sll_iterator():
    def __init__(self, start):
        self.current = start
    def __iter__(self): 
        return self
    def __next__(self):
        if not self.current:
            raise StopIteration
        data = self.current.item
        self.current = self.current.next
        return data
    
obj = Sll(start=None)
obj.insert_start(21)
obj.insert_start(34)
obj.insert_last(59)
obj.insert_after(34, 35)
# obj.delete_item(34)
# obj.delete_last()
# obj.delete_first()
# print(obj.search(21))
# obj.print_all()
for x in obj:
    print(x, end=" ")