import node from "./node.js";

const linkedList = () => {
  let length = 0;
  let head = null;

  const append = (value) => {
    const newNode = node(value);
    length++;
    if (head === null) {
      return (head = newNode);
    } else {
      let pointer = head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
  };

  const size = () => {
    if (!head) return null;
    return length;
  };

  const prepend = () => {
    const newNode = node(value);
    length++;
    if (head === null) {
      return (head = newNode);
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };

  const getHead = () => {
    if (!head) {
      return null;
    }
    return head;
  };

  const tail = () => {
    if (!head) {
      return null;
    }
    let pointer = head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const at = (index) => {
    if (!head) {
      return null;
    }
    let pointer = head;
    for (i = 0; i <= index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    if (!head) {
      return null;
    }
    let pointer = head;
    let prevNode = "";
    while (pointer.nextNode !== null) {
      prevNode = pointer;
      //   console.log("1", "pointer :", pointer, "previousNode: ", prevNode);
      pointer = pointer.nextNode;
      //   console.log("2", "pointer :", pointer, "previousNode: ", prevNode);
    }
    // console.log("3", "POINTER:", pointer, "PREVIOUS NODE", prevNode);
    prevNode.nextNode = null;
    // pointer.nextNode == null;
  };

  const contains = (value) => {
    if (!head) {
      return null;
    }
    let pointer = head;
    while (pointer.nextNode !== null) {
      if (pointer.value == value) {
        return pointer;
      }
      pointer = pointer.nextNode;
    }
    return null;
  };

  const find = (value) => {
    if (!head) {
      return null;
    }
    let pointer = head;
    let index = 0;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    }
    return null;
  };

  const toString = () => {
    if (!head) {
      return "Empty, nothing to print";
    }
    let pointer = head;
    let string = "";
    while (pointer.nextNode !== null) {
      string = string.concat(`${pointer.value} --> `);
      pointer = pointer.nextNode;
    }
    string = string.concat(`${pointer.value} --> null`);
    console.log(string);
    return string;
  };
  return {
    append,
    size,
    prepend,
    tail,
    getHead,
    at,
    pop,
    contains,
    find,
    toString,
  };
};
export default linkedList;
