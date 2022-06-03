var addTwoNumbers = function (l1, l2) {
  l1.reverse();
  l2.reverse();
  var sum = (parseInt(l1.join("")) + parseInt(l2.join("")))+'';
  return Array.from(String(sum), num=> Number(num)).reverse();
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
