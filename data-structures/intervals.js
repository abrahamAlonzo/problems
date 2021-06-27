/*
  Create a class for check if by given some lessons, are fully covered in a interval


  input Records:
    const coverageExample1 = {
      startDate: 1,
      endDate: 3
    }


    const coverageExample2 = {
      startDate: 4,
      endDate: 10
    }

    input coverage:
      const coverageExample3 = {
            startDate: 4,
            endDate: 7
          }
    

*/

const coverageExample1 = {
  startDate: 1,
  endDate: 3
}


const coverageExample2 = {
  startDate: 4,
  endDate: 10
}


const interval1 = {
  startDate: 3,
  endDate: 8
}


class Coverage {
  constructor() {
    this.coverage = [];
  }

  setCoach(event) {
    this.coverage.push(event)
  }

  printTraining() {
    console.log(this.coverage);
  }

  isCoverageFullFilled (interval) {
    
  }
}

const user = new Coverage();
user.setCoach(coverageExample1)
user.setCoach(coverageExample2)
user.printTraining()





