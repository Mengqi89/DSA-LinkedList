// what does it mean when constructor takes arguments?
//underscore means this node class is a private class that should not be accessible by anyone else other than the linked list class
class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// this.head indicates the beginning of the list; so it always contains the 1st node
class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head

        if (!this.head) {
            return null
        }

        while (currNode.next === null) {
            if (currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null
        }

        if (this.head.value === item) {
            this.head = this.head.next
            return
        }

        let currNode = this.head

        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

