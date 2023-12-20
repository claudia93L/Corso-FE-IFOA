const arrayNumbers = [36, 88, 20, 55, 4, 2, 75, 48];

class classNumbers {
  constructor(arrayNumbers) {
    this.arrayNumbers = arrayNumbers;
  }

  checkProperty() {
    if (classOne.hasOwnProperty(arrayNumbers)) {
      console.log('ha la proprietà');
    } else {
      console.log('non ha la proprietà');
    }
  }

  checkNumbers() {
    arrayNumbers.forEach((number) => {
      if (number % 3 === 0) {
        console.log('pippo');
      } else if (number % 5 === 0) {
        console.log('pluto');
      } else if (number % 3 === 0 && number % 5 === 0) {
        console.log('paperino');
      } else {
        console.log(`${number}`);
      }
    });
  }
  
}

let classOne = new classNumbers(arrayNumbers);

classOne.checkProperty();

classOne.checkNumbers();

