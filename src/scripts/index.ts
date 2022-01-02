import '../styles/style.scss';
import { selectionSort } from './app/selection-sort';
import { LinkedItem, LinkedList } from './app/linked-list';

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
