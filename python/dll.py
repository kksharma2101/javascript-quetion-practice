class Node:
    def __init__(self, pre=None, item=None, next=None):
        self.pre=pre
        self.item=item
        self.next=next

class Dll:
    def __init__(self, start=None):
        self.start=start

    def is_empty(self):
        return self.start == None

    def insert_at_start(self, data):
        n=Node(None, data)
        if self.start == None:
            self.start=n
        else:
            self.start.pre=n

    def insert_at_last(self, data):
        temp=self.start
        if temp is not None:
            while temp.next is not None:
                temp=temp.next
        n=Node(temp, data, None)
        if temp is None:
            self.start=n
        else:
            temp.next = n
        
    def search(self, data):
        temp=self.start
        while temp.next is not None:
            if temp.item is data:
                return temp
            temp=temp.next

    def insert_after(self, data, newData):
        if not self.is_empty():
            temp = self.start
            while temp is not None:
                if temp.item is data:
                    n=Node(temp, newData, temp.next)
                    if temp.next is None:
                        temp.next = n
                    temp.next = n
                    temp.next.pre = n
                temp = temp.next

    def print_all(self):
        temp = self.start
        while temp is not None:
            print(temp.item)
            temp = temp.next

    def delete_first(self):
        if self.is_empty():
            pass
        else:
            self.start=self.start.next

    def delete_last(self):
        if self.start is None:
            pass
        elif self.start.next is None:
            self.start = None
        else:
            temp = self.start
            while temp.next is not None:
                temp = temp.next
            temp.pre.next = None
            
    def delete_item(self, data):
        if self.start is None:
            pass
        else:
            temp = self.start
            while temp is not None:
                if temp.item is data:
                    if temp.next is not None:
                        temp.next.pre = temp.pre
                    if temp.pre is not None:
                        temp.pre.next = temp.next
                    else:
                        self.start = temp.next
                    break
                temp = temp.next
    
    def __iter__(self):
        return DllIterator(self.start)

class DllIterator():
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


obj=Dll(start=None)
obj.insert_at_start(20)
obj.insert_at_last(50)
obj.insert_at_last(300)
obj.insert_at_last(90)
# print(obj.search(20))
obj.insert_after(50, 400)
# obj.delete_first()
# obj.delete_last()
# obj.delete_item(300)
obj.print_all()

for x in obj:
    print(x, end=' ')