function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current < min) {
      min = current;
    }
    if (current > max) {
      max = current;
    }
    sum += current;
  }
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return {
    min: min,
    max: max,
    avg: avg,
  };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0)
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEven = sumEven + num;
    } else {
      sumOdd = sumOdd + num;
    }
  }
  return sumEven - sumOdd;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEven = sumEven + num;
      countEven++;
    }
  }
  if (countEven === 0) return 0;
  return sumEven / countEven;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const data of arrOfArr) {
    const result = func(...data);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
