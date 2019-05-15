const dsv = require('d3-dsv');
const fs = require('fs')

let input = fs.readFileSync('./citiesData.csv', "utf8")

// parse
let cityArray = dsv.csvParse(input)

//console.log(cityArray)
// convert from 1 dimension to that other thing

let newArray = []

const result1 = cityArray.filter(country => country['Country Name'] == "Country1")

//console.log(result1)

let doReduce = result1.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

function stateNameToStateObj(stateName) {
   return {
      name: stateName,
      cities: []
   }
}

function cityNametoCityObj(cityName) {
   return {
      name : cityName
      population : 
   }
}
let states = doReduce.map(stateNameToStateObj)
states.cities.map(cityNametoCityObj)

result1.forEach(function(originalObj) {
   states.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         statesObj.cities.push(originalObj.Name, originalObj.Population)
         statesObj.cities.sort()
      }
   })
})

 console.log(states)







// let doReduce2 = doReduce.reduce(function(accumulator2, currentValue2){
//   accumulator2.Name = accumulator2[]

//   return accumulator2
// }, {})

//console.log(doReduce)


// newArray.push(result1)

// console.log(newArray)
// console.log(cityArray[0]['Country Name'])












// let doReduce = cityArray.reduce(function(accumulator, currentValue) {
//   // console.log("accumulator: ", accumulator)
//   // console.log("currentValue: ", currentValue)

//  console.log("This is value: ", accumulator[currentValue['Country Name']])
//   if (accumulator[currentValue['Country Name']] != undefined){ //undefined isn't goint to work, because Country Name will always have a value to it
//   console.log("You made it!!\n")
//   }
//   else{
//     //newArray.push(currentValue)
//     accumulator.push(currentValue)
//     //console.log("Accumulator: ", newArray, "\n")
//     // console.log("Accumulator: ", accumulator)
//   }
//   return accumulator
// }, [])

// console.log(doReduce)

// print the json