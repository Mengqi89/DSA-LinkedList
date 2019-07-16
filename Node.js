// what does it mean when constructor takes arguments?
//underscore means this node class is a private class that should not be accessible by anyone else other than the linked list class
class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = _Node