'use strict';

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index) {
        if(index < 0 || index >= this.length)
        return null

        let current = this.head
        for(let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
}

class Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}


//Helper function for TTD
LinkedList.fromValues = fucntion(...values) {
    const newList = new LinkedList()
    for (let i = values.length -1; i >= 0; i--) {
        newList.insertAtHead(values[i])
    }
    return newList
}    

module.exports = LinkedList