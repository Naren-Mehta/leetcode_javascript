var findWinners = function (matches) {
  const winners = new Set();
  const loosers = new Map();
  const losesOnce = [];

  for (let i = 0; i < matches.length; i++) {
    loosers.set(matches[i][1], (loosers.get(matches[i][1]) || 0 ) + 1);
  }

  for (let i = 0; i < matches.length; i++) {
     if (loosers.get(matches[i][1]) && loosers.get(matches[i][1]) === 1) {
      losesOnce.push(matches[i][1]);
    }

    if (!loosers.get(matches[i][0])) {
      winners.add(matches[i][0])
    }
  }

  const notLost = Array.from(winners);

  losesOnce.sort((a, b) => a-b);
  notLost.sort((a, b) => a-b);

  return [notLost, losesOnce];
};

const arr = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];
const result = findWinners(arr);

console.log(result);
