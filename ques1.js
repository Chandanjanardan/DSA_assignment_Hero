
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList {
    constructor(){
        this.head=null; 
        this.size=0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            node.next=this.head //doubt
            
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value);
        if (this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head;
            while(prev.next){
                console.log(prev.next)
                prev = prev.next;
            }
            prev.next=node
        }
        this.size++
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
       }
       print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr=this.head
            let listVlaue =" "
            while(curr){
                listVlaue+=`${ curr.value }`
                curr=curr.next
            }
            console.log(listVlaue)
        }
    }
}
    

    const list= new LinkedList();
    list.append(1)
    list.append(2)
    list.append(3)
    list.append(4)
    list.print()
    list.reverse()
    list.print()
    