var maxScore = function (cardPoints, k) {
  let lSum = 0,
    n = cardPoints.length,
    max = 0;

  for (let i = 0; i < k; i++) {
    lSum += cardPoints[i];
  }

  max = lSum;

  for (let rSum = 0, i = 0; i < k; i++) {
    rSum += cardPoints[n - 1 - i];
    lSum -= cardPoints[k - 1 - i];
    max = Math.max(max, lSum + rSum);
  }

  return max;
};

const result = maxScore(
    [57,62,46,22,9,23,14,24,33,10,80,95,6,54,52,12,70,7,33,98,74,17,61,20,81],
  11
);
console.log(result);
