import { Node, search } from './bfs';

describe('Breadth-first search', () => {
    let you: Node;

    beforeEach(() => {
        you = new Node('You');
        let alice = new Node('Alice');
        let peggi = new Node('Peggi');
        let bob = new Node('Bob');
        let anuj = new Node('Anuj');
        let jonny = new Node('Jonny');
        let klaire = new Node('Klaire');
        let thom = new Node('Thom');

        you.children = [bob, klaire, alice];
        bob.children = [anuj, peggi];
        alice.children = [peggi];
        klaire.children = [thom, jonny];
    });

    it('should find element if exist', () => {
        expect(search(you, 'Thom')).toBeDefined();
    });

    it('should not find element if not exist', () => {
        expect(search(you, 'Not Exist Man')).toBeNull();
    });

    it('should be ok for edge cases when a lot of duplicate or strange checks', () => {
        you.children = [...you.children, you, you, you];
        expect(search(you, 'Alice')).toBeDefined();
        expect(search(you, 'You1')).toBeDefined();
        expect(search(you, 'YouAreNotExist')).toBeNull();
    });
});
