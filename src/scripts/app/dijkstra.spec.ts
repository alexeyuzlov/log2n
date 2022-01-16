import { GraphPosition, WeightGraph } from './dijkstra';

describe('dijkstra', () => {
    let graphWithWeight: WeightGraph;

    beforeEach(() => {
        graphWithWeight = new WeightGraph();
        graphWithWeight.addNode(GraphPosition.Start, {a: 6, b: 2});
        graphWithWeight.addNode('b', {a: 3, [GraphPosition.End]: 5});
        graphWithWeight.addNode('a', {[GraphPosition.End]: 1});
    });

    it('should correct find best way', () => {
        const result = graphWithWeight.search();
        expect(result).toEqual([
            {key: 'b', cost: 2},
            {key: 'a', cost: 5},
            {key: 'end', cost: 6},
        ]);
    });

    xit('should prevent negative values', () => {
        //
    });

    xit('should prevent cyclic deps', () => {
        //
    });

    xit('should prevent search without result way', () => {
        //
    });
});
