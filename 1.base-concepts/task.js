"use strict";

// Task 1
function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  }

  const sqrtDisc = Math.sqrt(discriminant);
  const root1 = (-b + sqrtDisc) / (2 * a);
  const root2 = (-b - sqrtDisc) / (2 * a);
  arr.push(root1, root2);
  return arr;
}

// Task 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12; // P — месячный процент (1/12 процентной ставки (от 0 до 1))
  const S = amount - contribution; // S — тело кредита
  const n = countMonths;

  if (S <= 0) {
    return 0;
  }

  const monthlyPayment = S * (P + (P / (Math.pow(1 + P, n) - 1)));

  const totalAmount = monthlyPayment * n;

  return Number(totalAmount.toFixed(2));
}


