export enum GraphPosition {
    Start = 'start',
    End = 'end'
}

type NodeKey = string | GraphPosition;

type NodeChildren = Record<NodeKey, number>;

type NodeRelations = Record<NodeKey, NodeKey>;

interface Graph {
    [key: NodeKey]: NodeChildren;
}

export class WeightGraph {
    private _graph: Graph = {
        end: {}
    };

    private _costs: NodeChildren = {};

    private _parents: NodeRelations = {};

    public addNode(node: NodeKey, children: NodeChildren) {
        this._graph = {
            ...this._graph,
            [node]: children
        };
    }

    public search() {
        this._prepare();

        const processed: NodeKey[] = [];

        let nodeKey: NodeKey = this._findLowestCostNode(processed);

        while (nodeKey !== null) {
            this._updateWeightAndRelations(nodeKey);
            processed.push(nodeKey);
            nodeKey = this._findLowestCostNode(processed);
        }

        let currentKey: NodeKey = GraphPosition.End;
        let result = [];
        while (currentKey !== GraphPosition.Start) {
            result.unshift({
                key: currentKey,
                cost: this._costs[currentKey]
            });

            currentKey = this._parents[currentKey];
        }

        return result;
    }

    private _findLowestCostNode(processed): NodeKey {
        let min: number = Number.POSITIVE_INFINITY;
        let nodeKey: NodeKey = null;

        for (const key in this._costs) {
            if (processed.includes(key)) {
                continue;
            }

            if (this._costs.hasOwnProperty(key)) {
                const current: number = this._costs[key];
                if (current < min) {
                    min = current;
                    nodeKey = key;
                }
            }
        }

        return nodeKey;
    }

    private _updateWeightAndRelations(nodeKey: NodeKey) {
        let nodeCost: number = this._costs[nodeKey];
        let nodeChildren: NodeChildren = this._graph[nodeKey];

        for (let childKey in nodeChildren) {
            if (nodeChildren.hasOwnProperty(childKey)) {
                const childCost: number = nodeChildren[childKey];
                let newCost = nodeCost + childCost;
                if (this._costs[childKey] > newCost) {
                    this._costs[childKey] = newCost;
                    this._parents[childKey] = nodeKey;
                }
            }
        }
    }

    private _prepare() {
        this._costs = {
            ...this._graph[GraphPosition.Start],
            [GraphPosition.End]: Number.POSITIVE_INFINITY
        };

        let parents = {};
        for (let key in this._graph[GraphPosition.Start]) {
            if (this._graph.hasOwnProperty(key)) {
                parents[key] = GraphPosition.Start;
            }
        }

        this._parents = {
            ...parents,
            [GraphPosition.End]: null
        };

        this._graph = {
            ...this._graph,
            [GraphPosition.End]: {}
        };
    }
}

