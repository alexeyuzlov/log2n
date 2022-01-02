export class Stack<T> {
    private _value: T[] = [];

    get size() {
        return this._value.length;
    }

    public pop(): T | null {
        return this._value.pop() || null;
    }

    public push(item: T) {
        this._value.push(item);
    }
}
