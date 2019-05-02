function Node(value) {
    this.data = value;
    this.next = null;
}

function LinkedList() {
    this.head = null ;
    this.size = 0 ;
}

LinkedList.prototype.insert = function (data) {
    let newNode = new Node(data);
    if(!this.head) {
    this.head = newNode; 
    }
    else {
       let currentNode = this.head;
    while(currentNode.next) 
      currentNode = currentNode.next;
      currentNode.next = newNode;
    }
    this.size++;
}

LinkedList.prototype.insertAt = function (data,position) {
  
    let newNode = new Node(data);
    let currentNode = this.head;
    if(position===1) {
        newNode.next = currentNode;
        this.head = newNode;
        this.size++;
    }
    else  {
    for(let i=1;i<position-1;i++) {
        currentNode = currentNode.next;
        if(!currentNode) {
            console.log("LinkedList Overflow.......!")
            return ;
            }
    }
    newNode.next = currentNode.next;
    currentNode.next= newNode;
    this.size++;
    
}

}

LinkedList.prototype.deleteAt = function(position) {
    let currentNode = this.head
    if(!currentNode)
    return ;
    else if(position===1) {
        currentNode = currentNode.next;
        this.head = currentNode;
        this.size--;
    }
    else {
    for(let i=1;i<position-1;i++) {
        currentNode  = currentNode.next;
    }
    let temp = currentNode.next.next; 
    currentNode.next=temp;
    this.size--;
    }
}



LinkedList.prototype.printList = function (){
    let currentNode = this.head;
    while(currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}


const linklist = new LinkedList();
linklist.insert(5);
linklist.insert(6);
linklist.insertAt(7,3);
linklist.insertAt(8,3);
linklist.deleteAt(1);
linklist.deleteAt(2);
linklist.printList();
console.log('size of LinkList is:',linklist.size)