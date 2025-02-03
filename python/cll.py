class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next

class CLL:
    def __init__(self, tail=None):
        self.tail = tail
    
    def is_empty(self):
        return self.tail == None
    
    def insert_at_start(self, item):
        n=Node(item)
        if self.is_empty():
            n.next = n
            self.tail = n
        else:
            n.next = self.tail.next
            self.tail.next = n

    def insert_at_last(self, item):
        n=Node(item)
        if self.is_empty():
            n.next = n
            self.tail = n
        else:
           n.next = self.tail.next
           self.tail.next = n
           self.tail = n

    def search(self, item):
        if self.is_empty():
            pass
        else:
            temp = self.tail
            while temp.next is not self.tail:
                if temp.val is item:
                    return temp
                temp=temp.next
            if temp.val is item:
                return temp
            return
    
    def insert_after(self, temp, item):
        if temp is not None:
            n = Node(item, temp.next)
            temp.next = n

    def print_all(self):
        if not self.is_empty():
            temp = self.tail.next
            while temp is not self.tail:
                print(temp.val, end=' ')
                temp=temp.next
            print(temp.val, end=' ')

    def delete_first(self):
        if self.is_empty():
            pass
        elif self.tail.next == self.tail:
            self.tail = None
        else:
            self.tail.next = self.tail.next.next

    def delete_last(self):
        if self.is_empty():
            pass
        elif self.tail.next == self.tail:
            self.tail = None
        else:
            temp = self.tail.next
            while temp.next is not self.tail:
                temp = temp.next
            temp.next = self.tail.next
            self.tail = temp

    def delete_item(self, item):
        if not self.is_empty():
            if self.tail.next == self.tail:
                if self.tail.val == item:
                    self.tail = None
            else:
                if self.tail.next.val == item:
                    self.delete_first()
                    # self.tail.next = self.tail.next.next
                else:
                    temp = self.tail.next
                    while temp is not self.tail:
                        if temp.next is self.tail:
                           if self.tail.val == item:
                            self.delete_last()
                            break
                        elif temp.next.val == item:
                            temp.next = temp.next.next
                            break
                        temp = temp.next


obj = CLL()
obj.insert_at_start(21)
obj.insert_at_start(100)
obj.insert_at_last(450)
# print(obj.search(450))
# obj.insert_after(obj.search(21), 330)
# obj.delete_first()
# obj.delete_last()
# obj.delete_item(450)
obj.print_all()
