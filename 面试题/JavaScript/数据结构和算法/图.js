class Graph {
    constructor(v) {
        this.vertice = v;
        this.edges = 0;
        this.adj = [];
        for (let i = 0; i < v; i ++) {
            this.adj[i] = [''];
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges ++;
    }
    toString() {

    }

    // dfs /todo

    // bfs /todo
}