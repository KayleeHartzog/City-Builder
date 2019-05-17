const dsv = require('d3-dsv');
const fs = require('fs')

let input = fs.readFileSync('./citiesData.csv', "utf8")

// parse
let cityArray = dsv.csvParse(input)

// convert from 1 dimension to that other thing
function countryNameToCountryObj(countryObj) {
   return {
      name: countryObj,
      states: []
   }
}

function stateNameToStateObj(stateName) {
   return {
      name: stateName,
      cities: []
   }
}

let countries;

let newArray = []
cityArray.forEach(function(parseObj) {
   if (newArray.includes(parseObj['Country Name']) === false) {
      newArray.push(parseObj['Country Name'])
      countries = newArray.map(countryNameToCountryObj)
      newArray.sort()
   }
})

let copyNewArray = newArray


// for (let i = 1; i < 6; i++) {
//    let countrynum = "Country" + [i]
//    console.log(countrynum)
//}



const Country1 = cityArray.filter(country => country['Country Name'] == "Country1")
const Country2 = cityArray.filter(country => country['Country Name'] == "Country2")
const Country3 = cityArray.filter(country => country['Country Name'] == "Country3")
const Country4 = cityArray.filter(country => country['Country Name'] == "Country4")
const Country5 = cityArray.filter(country => country['Country Name'] == "Country5")

console.log(Country1)

/**************************************
 * Work for Country 1
 **************************************/
let doReduce = Country1.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

let objStates = doReduce.map(stateNameToStateObj)

Country1.forEach(function(originalObj) {
   objStates.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         let cityObj = {name : originalObj.Name, population : originalObj.Population}
         statesObj.cities.push(cityObj)
         statesObj.cities.sort((a, b) => {
            if (a.name > b.name)
               return 1
            else
               return -1
         })
      }
   })
})

countries[0].states = objStates

/**************************************
 * Work for Country 2
 **************************************/
let doReduce2 = Country2.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

let objStates2 = doReduce2.map(stateNameToStateObj)

Country2.forEach(function(originalObj) {
   objStates2.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         let cityObj = {name : originalObj.Name, population : originalObj.Population}
         statesObj.cities.push(cityObj)
         statesObj.cities.sort((a, b) => {
            if (a.name > b.name)
               return 1
            else
               return -1
         })
      }
   })
})

countries[1].states = objStates2

/**************************************
 * Work for Country 3
 **************************************/
let doReduce3 = Country3.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

let objStates3 = doReduce3.map(stateNameToStateObj)

Country3.forEach(function(originalObj) {
   objStates3.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         let cityObj = {name : originalObj.Name, population : originalObj.Population}
         statesObj.cities.push(cityObj)
         statesObj.cities.sort((a, b) => {
            if (a.name > b.name)
               return 1
            else
               return -1
         })
      }
   })
})

countries[2].states = objStates3

/**************************************
 * Work for Country 4
 **************************************/
let doReduce4 = Country4.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

let objStates4 = doReduce4.map(stateNameToStateObj)

Country4.forEach(function(originalObj) {
   objStates4.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         let cityObj = {name : originalObj.Name, population : originalObj.Population}
         statesObj.cities.push(cityObj)
         statesObj.cities.sort((a, b) => {
            if (a.name > b.name)
               return 1
            else
               return -1
         })
      }
   })
})

countries[3].states = objStates4

/**************************************
 * Work for Country 5
 **************************************/
let doReduce5 = Country5.reduce(function (accumulator, currentValue) {
   if (accumulator.includes(currentValue['State Name']) === false) {
      accumulator.push(currentValue.name = currentValue["State Name"])
   }
   accumulator.sort()
   return accumulator
}, [])

let objStates5 = doReduce5.map(stateNameToStateObj)

Country5.forEach(function(originalObj) {
   objStates5.forEach(function (statesObj) {
      if (originalObj["State Name"] === statesObj.name){
         let cityObj = {name : originalObj.Name, population : originalObj.Population}
         statesObj.cities.push(cityObj)
         statesObj.cities.sort((a, b) => {
            if (a.name > b.name)
               return 1
            else
               return -1
         })
      }
   })
})

countries[4].states = objStates5



// print the json
let finalThing = JSON.stringify(countries)
fs.writeFileSync('arrayOfObjects.json', finalThing)


//https://stackabuse.com/reading-and-writing-json-files-with-node-js/