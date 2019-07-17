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

    //helper function to get the node at a specified index
    getAt(index) {
        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    // Implement a function called insertAt() that inserts an item at a specific position in the linked list.
    insertAt(data, index) {

        if (!this.head) {
            this.head = new _Node(data, null)
            return
        }

        if (index === 0) {
            this.head = new _Node(data, this.head)
            return
        }

        const previous = this.getAt(index - 1)
        let newNode = new _Node(data, previous.next)
        previous.next = newNode
        return
    }
    // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    insertBefore(data, ref) {
        let currNode = this.head

        while (currNode.next !== null) {
            if (currNode.next.value === ref) {
                let newNode = new _Node(data, currNode.next)
                currNode.next = newNode
                return
            } else {
                // Otherwise, keep looking 

                currNode = currNode.next
            }
        }
        return null
    }

    insertAfter(data, ref) {
        let currNode = this.head

        while (currNode.next !== null) {
            if (currNode.value === ref) {
                let newNode = new _Node(data, currNode.next)
                currNode.next = newNode
                return
            } else {
                // Otherwise, keep looking 

                currNode = currNode.next
            }
        }
        return null
    }

    find(item) {
        //start at the head
        let currNode = this.head
        //if the list is empty
        if (!this.head) {
            return null
        }
        //check for the item
        while (currNode.next !== item) {
            /* Return null if it's the end of the list
               and the item is not on the list */
            if (currNode.next === null) {
                return null
            } else {
                // Otherwise, keep looking 

                currNode = currNode.next
            }
        }
        //found it!
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

// Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Tauhida')

    console.log(SLL.head.value)
    displayLinkedList(SLL)
    listSize(SLL)
    console.log(isEmpty(SLL))
    console.log(findPrevious(SLL, 'Husker'))
}

main()

function displayLinkedList(list) {
    let current = list.head
    let str = ''
    while (current) {
        str += current.value + ' '
        current = current.next
    }
    console.log(str)
}

function listSize(list) {
    let current = list.head
    let counter = 0
    while (current) {
        counter++
        current = current.next
    }
    console.log(counter)
}

function isEmpty(list) {
    if (list.head === null) {
        return true
    } else {
        return false
    }
}

function findPrevious(list, ref) {
    let currentNode = list.head

    while (currentNode !== null) {
        if (currentNode.next.value === ref) {
            return currentNode
        } else {
            currentNode = currentNode.next
        }
    }
    return null
}