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
  
 
  function mergeLinkedLists(list1, list2) {
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
    if (list1.value < list2.value) {
      list1.next = mergeLinkedLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeLinkedLists(list1, list2.next);
      return list2;
    }
  }
  
  let list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(5);
  
  let list2 = new ListNode(2);
  list2.next = new ListNode(4);
  list2.next.next = new ListNode(6);
  
  let mergedList = mergeLinkedLists(list1, list2);
  printList(mergedList); 
  