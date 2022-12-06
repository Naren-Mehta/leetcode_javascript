var findWinners = function (matches) {
  const playerSet = new Set();
  const looserMap = {};
  const result = [[], []];

  for (let i = 0; i < matches.length; i++) {
    if (looserMap[matches[i][1]]) {
      looserMap[matches[i][1]] += 1;
    } else {
      looserMap[matches[i][1]] = 1;
    }

    playerSet.add(matches[i][0]);
    playerSet.add(matches[i][1]);
  }

  const sortedPlayerArr = Array.from(playerSet).sort((a, b) => a - b);

  for (const player of sortedPlayerArr) {
    if (!looserMap[player]) {
      result[0].push(player);
    } else if (looserMap[player] === 1) {
      result[1].push(player);
    }
  }

  return result;
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
