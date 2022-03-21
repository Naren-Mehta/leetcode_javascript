

function Graph() {
    this.vertices = [];
    this.edges = [];
  }

  Graph.prototype.addVertices = function (v){
    this.vertices.push(v);
  }

  const g = new Graph();

  console.log(Graph.prototype === g.__proto__); // true