class Node:
    def __init__(self, prev=None, item=None, next=None):
        self.prev = prev
        self.item = item
        self.next = next

class CDLL:
    def __init__(self, start=None):
        self.start=start

    def is_empty(self):
        return self.start == None

    def insert_at_start(self, data):
        n=Node(None,data)
        if self.is_empty():
            n.next = n
            n.prev = n
        else:
            n.next = self.start
            n.prev = self.start.prev
            self.start.prev.next = n
            self.start.prev = n
        self.start = n 

    def insert_at_last(self, data):
        n = Node(None, data)
        if self.is_empty():
            n.next = n
            n.prev = n
            self.start = n
        else:
            n.next=self.start
            n.prev=self.start.prev
            self.start.prev.next = n
            self.start.prev = n

    def search(self, data):
        if not self.is_empty():
            temp = self.start
            while temp.next is not self.start:
                if temp.item is data:
                    return temp
                temp = temp.next
            if temp.item is data:
                return temp

    def insert_at_after(self, temp, data):
        if not self.is_empty():
            n=Node(temp, data, temp.next)
            if temp is not None:
                temp.next = n
                temp.next.prev = n

    def print_all(self):
        if not self.is_empty():
            temp = self.start
            while temp.next is not self.start:
                print(temp.item, end=' ')
                temp = temp.next
            print(temp.item)

    def delete_first(self):
        if self.start is None:
            pass
        elif self.start.next is self.start:
            self.start = None
        else:
            self.start.prev.next = self.start.next
            self.start.next.prev = self.start.prev
            self.start = self.start.next

    def delete_last(self):
        if self.is_empty():
            pass
        elif self.start.next is self.start:
            self.start = None
        else:
            self.start.prev.prev.next = self.start
            self.start.prev = self.start.prev.prev

    def delete_item(self, data):
        if not self.is_empty():
            temp = self.start
            if temp.item == data:
                self.delete_first()
            else:
                temp = temp.next
                while temp is not self.start:
                    if temp.item is data:
                        temp.prev.next = temp.next
                        temp.next.prev = temp.prev
                        break
                    temp = temp.next

    def __iter__(self):
        return CdllIterator(self.start)

class CdllIterator:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current is None:
            raise StopIteration
        else:
            data = self.current.item
            self.current=self.current.next
            return data

obj = CDLL()
obj.insert_at_start(20)
obj.insert_at_last(40)
obj.insert_at_last(340)
obj.insert_at_start(60)
# print(obj.search(40))
# obj.insert_at_after(obj.search(20),21)
# obj.delete_first()
# obj.delete_last()
obj.delete_item(40)
obj.print_all()