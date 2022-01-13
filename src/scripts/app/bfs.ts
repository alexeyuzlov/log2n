export class Node {
    public children: Node[] = [];

    constructor(public name: string) {
    }
}

export function search(root: Node, name: string): Node | null {
    const checked: Node[] = [root];
    const queue = root.children;

    while (queue.length > 0) {
        const current = queue.pop();

        if (current.name === name) {
            return current;
        }

        checked.push(current);

        current.children.forEach((dep) => {
            if (!checked.includes(dep)) {
                queue.push(dep);
            }
        });
    }

    return null;
}
