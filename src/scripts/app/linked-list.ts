export class LinkedList<T> {
    public length: number = 0;

    public head: LinkedItem<T> = null;

    get tail(): LinkedItem<T> {
        let node = this.head;
        while (node?.next) {
            node = node.next;
        }

        return node;
    }

    get size() {
        let count = 0;

        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    public add(item: LinkedItem<T>) {
        const tail = this.tail;
        if (!tail) {
            this.head = item;
        } else {
            this.tail.next = item;
        }
    }

    public clear() {
        this.head = null;
    }

    public toArray() {
        const result: T[] = [];
        let node = this.head;

        while (node) {
            result.push(node.value);

            node = node.next;
        }

        return result;
    }
}

export class LinkedItem<T> {
    public next: LinkedItem<T>;

    constructor(public value: T) {
    }
}
