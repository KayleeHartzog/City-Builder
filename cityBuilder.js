const dsv = require('d3-dsv');
const fs = require('fs')

let input = fs.readFileSync('./citiesData.csv', "utf8")

// parse
let cityArray = dsv.csvParse(input)

 //console.log(cityArray)
//console.log(Object.keys(cityArray))
// convert from 1 dimension to that other thing
let doReduce = cityArray.reduce(function(accumulator, currentValue) {
//  console.log("accumulator: ", accumulator)
//  console.log("currentValue: ", currentValue)

console.log("This is value: ", currentValue['Country Name'])
  if (accumulator[currentValue['Country Name']] != undefined){ //undefined isn't goint to work, because Country Name will always have a value to it
console.log("You made it!!\n")
  }
  else{
    //newArray.push(currentValue)
    accumulator.push(currentValue)
    //console.log("Accumulator: ", newArray, "\n")
  }
  return accumulator
}, [])

//console.log(doReduce)

// print the json




