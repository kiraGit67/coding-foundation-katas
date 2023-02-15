class SumApp {
  // Add you solution here
  constructor() {
    this.numbers = [];
  }

  //methods
  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let sum = 0;

    if (this.numbers.length === 0) {
      sum = 0;
    } else {
      for (let number of this.numbers) {
        sum += number;
      }
    }
    return sum;
  }

  reset() {
    this.numbers = [];
  }
}

const sumApp = new SumApp();

sumApp.addNumber(1);
sumApp.addNumber(2);

console.log(sumApp.numbers.length); // 2

console.log(sumApp.getSum()); // 3

sumApp.reset();

console.log(sumApp.numbers.length); // 0
console.log(sumApp.getSum()); // 0
