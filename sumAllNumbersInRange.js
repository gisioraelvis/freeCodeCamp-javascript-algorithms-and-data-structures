//https://study.com/academy/lesson/finding-the-sum-of-consecutive-numbers.html
//sum = (n / 2)(first number + last number)

function sumAll(arr) {
  let fNum = Math.min(...arr);
  let lNum = Math.max(...arr);
  let n = lNum - fNum + 1;

  return (n / 2) * (fNum + lNum);
}

console.log(sumAll([1, 100]));
