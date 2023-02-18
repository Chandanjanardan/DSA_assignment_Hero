
class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function printList(head) {
    let currNode = head;
    let listStr = "";
    while (currNode !== null) {
      listStr += currNode.value + " -> ";
      currNode = currNode.next;
    }
    listStr += "null";
    console.log(listStr);
  }
  function reverseAndConcatenate(head) {
    let current = head;
    let result = '';
    while (current !== null) {
      result = current.value + result;
      
      current = current.next;
    }
    console.log(result)
    return result
  }
  function addLists(l1, l2) {
    let sum = parseInt(reverseAndConcatenate(l1)) + parseInt(reverseAndConcatenate(l2));
    return sum;
  }
  

  let list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(5);
  printList(list1)
  
  let list2 = new ListNode(2);
  list2.next = new ListNode(4);
  list2.next.next = new ListNode(6);
  printList(list2)
  console.log(addLists(list1, list2));