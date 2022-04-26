const arr = [1, 2, 3, 4, 5, 6];

function shuffle(arr1) {
  let length = arr1.length,
    index = 0;
  while (length > 0) {
    const randomValue = Math.floor(Math.random() * length);
    [arr1[index], arr1[randomValue]] = [arr1[randomValue], arr1[index]];
    length--;
    index++;
  }
  return arr1;
}

console.log(shuffle(arr));
