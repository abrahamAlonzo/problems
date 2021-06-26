/*
Problem 1:
  given a experiment, which have name, cohort,  // example cohort: ["blue", "red", "black"]
  return a evenly distribiued record without save userID,given a user id,
  the function should return exact the same types of cohorts.

example
 console.log(getCohortByUserId(1) )


 input: 
    const experiment1 = {
      name: "First experiment",
      cohort: ["blue", "red", "black"]
    }

    const experiment2 = {
      name: "First experiment",
      cohort: [1,2,3,4,5]
    }

 output:
  [ 'red', 2 ]

   console.log(getCohortByUserId(2) )

 output:
  [ 'black', 3 ]


  Problem 2: 
    now is necesarry have distribution between results, this means
    if we have distributions like 10%,20%,70%, we should return that number of 
    cohort types for a given user id

*/



const experiment1 = {
  name: "First experiment",
  cohort: ["blue", "red", "black"],
  distribution: [7,3,1]
}

const experiment2 = {
  name: "First experiment",
  cohort: [1,2,3,4,5],
  distribution: [7,3]
}



class Experiments {
  constructor() {
    this.experiments = []
  }

  printExperiments() {
    console.log(this.experiments)
  }

  getCohortByUserId(userId){
    const experimentByUserId = this.experiments.map((experiment) => {
      const indexGroup = userId % experiment.cohort.length;
      return experiment.cohort[indexGroup]
    })
    console.log(experimentByUserId)
    return experimentByUserId;
  }

  registerExperiment(newExperiment) {
    this.experiments.push(newExperiment)
  }

  getCohortWithDistributionByUserId(userId) {
    const experimentByUserId = this.experiments.map((experiment) => {
      const indexForDistribution = userId % 10; // return 3
      let indexGroup = 0;
      experiment.distribution.forEach((distribution, index) => {
        if (indexForDistribution < distribution ) {
          indexGroup = index
        }
      })

      return experiment.cohort[indexGroup]
    })
    console.log(experimentByUserId)
    return experimentByUserId;
  }
  
}

// userId > distribution
// 1 > 1
// 5 > 3
// 5 > 7



const register = new Experiments();
register.registerExperiment(experiment1)
register.registerExperiment(experiment2)
register.printExperiments()
// register.getCohortByUserId(1)
// register.getCohortByUserId(2)
// register.getCohortByUserId(1)
register.getCohortWithDistributionByUserId(1)
register.getCohortWithDistributionByUserId(2)
register.getCohortWithDistributionByUserId(3)
register.getCohortWithDistributionByUserId(4)
register.getCohortWithDistributionByUserId(5)
register.getCohortWithDistributionByUserId(6)
register.getCohortWithDistributionByUserId(7)
register.getCohortWithDistributionByUserId(8)
register.getCohortWithDistributionByUserId(9)
register.getCohortWithDistributionByUserId(10)