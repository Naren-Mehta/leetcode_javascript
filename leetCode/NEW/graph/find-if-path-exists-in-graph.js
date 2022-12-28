/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    const graph = new Map();

    for(const [v, e] of edges){
        if(graph.has(v)){
            graph.get(v).push(e);
        } else{
            graph.set(v , [e]);
        }

        if(graph.has(e)){
            graph.get(e).push(v);
        } else{
            graph.set(e, [v]);
        }
    }

    const queue = [source];
    const visited = new Set();

    while(queue.length > 0){
         const node = queue.shift();
         if(node === destination){
            return true;
         }

         for(neighbor of graph.get(node)){
            if(visited.has(neighbor)){
                continue;
            }

            queue.push(neighbor);
            visited.add(neighbor);
         }
    }

    return false;
}

const result = validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5);
console.log(result);