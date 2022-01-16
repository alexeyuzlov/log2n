import '../styles/style.scss';
import { selectionSort } from './app/selection-sort';
import { LinkedItem, LinkedList } from './app/linked-list';
import { quickSort } from './app/quick-sort';
import { Node, search } from './app/bfs';
import { GraphPosition, WeightGraph } from './app/dijkstra';

const arr: number[] = [5, 9, 4, 8, 2, 0, 6, 7, 3, 1];
const selectionSortedArr: number[] = selectionSort(arr);
// const resultIndex: number = search(selectionSortedArr, 0);

// console.info('selection sort result', selectionSortedArr, arr);
// console.info("binary search result", resultIndex);

const list = new LinkedList<number>();
list.add(new LinkedItem<number>(4));
list.add(new LinkedItem<number>(3));
list.add(new LinkedItem<number>(2));
// console.info(list.toArray(), list.size);

list.clear();
list.add(new LinkedItem<number>(1));

// console.info(list.toArray(), list.size);

let result = quickSort(arr, -1);
// console.info(result);

const you = new Node('You');
const alice = new Node('Alice');
const peggi = new Node('Peggi');
const bob = new Node('Bob');
const anuj = new Node('Anuj');
const jonny = new Node('Jonny');
const klaire = new Node('Klaire');
const thom = new Node('Thom');

you.children = [bob, klaire, alice];
bob.children = [anuj, peggi];
alice.children = [peggi];
klaire.children = [thom, jonny];

const item = search(you, 'Thom');
// console.info(item);

let graphWithWeight = new WeightGraph();
graphWithWeight.addNode(GraphPosition.Start, {a: 6, b: 2});
graphWithWeight.addNode('b', {a: 3, [GraphPosition.End]: 5});
graphWithWeight.addNode('a', {[GraphPosition.End]: 1});
// console.table(graphWithWeight.search());
