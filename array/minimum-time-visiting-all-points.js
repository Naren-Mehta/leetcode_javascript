var minTimeToVisitAllPoints = function (points) {
  const l = points.length;
  let total =0;
  for (var i = 0; i < l-1; i++) {
      total +=Math.max(Math.abs(points[i+1][0]-points[i][0]), Math.abs(points[i+1][1] - points[i][1]));
  }
  return total;
};

console.log(
  minTimeToVisitAllPoints(
    [[1,1],[3,4],[-1,0]]
  )
);
