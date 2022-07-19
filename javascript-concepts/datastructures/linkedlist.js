class node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

class linkedList {
    constructor(head = null){
        this.head = head;
    }
    add(element){
        var node = new Node(element);
        var current;
        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    removeElement(element){
        var current = this.head;
        this.prev = null;
        while(current!=null){
            if(current.element === element){
                if(prev==null){
                    this.head = current.next;
                }else{
                    this.prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current= current.next;
        }
        return -1;
    }
}

let node1 = new node(1);
let node2 = new node(2);
node1.next = node2;

let list = new linkedList(node1);

