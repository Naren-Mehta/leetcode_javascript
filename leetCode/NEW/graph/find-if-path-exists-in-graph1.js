/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    if(source === destination){
        return true;
    }

    const graph = new Map();
    
    // Create a set to store our visited nodes
    const visited = new Set();

    for(const [v ,e] of edges){
        if(graph.has(v)){
            graph.get(v).push(e);
        } else{
            graph.set(v, [e]);
        }

        if(graph.has(e)){
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
  

    const dfs = v => {
        visited.add(v);

        const edges = graph.get(v);

        if(edges && edges.length > 0){
            for(const e of edges){
                if(!visited.has(e)) {
                    dfs(e);
                }
            }
        }
    }

    dfs(source);
    
    return visited.has(destination);
};

const result = validPath(3, [[0,1],[1,2],[2,0]], 0, 2);
console.log(result);