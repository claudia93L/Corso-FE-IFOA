class classNumbers {
  constructor(array = null) {
    if (array !== null) {
      this.numbers = array;
    }
  }

  checkNumbers() {
    this.numbers.forEach((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        console.log('paperino');
      } else if (number % 5 === 0) {
        console.log('pluto');
      } else if (number % 3 === 0) {
        console.log('pippo');
      } else if (number % 3 === 0 && number % 5 === 0) {
        console.log('paperino');
      } else {
        console.log(number.toString());
      }
    });
  }
}

const arrayNumbers = [36, 88, 20, 55, 4, 2, 75, 48, 15];

let classOne = new classNumbers(arrayNumbers);

(function checkProperty() {
  if (classOne.hasOwnProperty('numbers')) {
    console.log('ha la proprietà');
    classOne.checkNumbers();
  } else {
    console.log('non ha la proprietà');
  }
})();
