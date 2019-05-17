const dsv = require('d3-dsv');
const fs = require('fs')

let input = fs.readFileSync('./citiesData.csv', "utf8")

// parse
let cityArray = dsv.csvParse(input)

let newArray = []
let countries;
let i = 0

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

 function filterCountries(countryName){
    const Country = cityArray.filter(country => country['Country Name'] == countryName)
    return Country
 }

 function getArrayofStringObj(reducedCountry) {
    let doReduce = reducedCountry.reduce(function (accumulator, currentValue) {
        if (accumulator.includes(currentValue['State Name']) === false) {
           accumulator.push(currentValue.name = currentValue["State Name"])
        }
        accumulator.sort()
        return accumulator
    }, [])
    let objStates = doReduce.map(stateNameToStateObj)
    return objStates
 }

 function pushCities(filteredCountry, stringArrayObj) {
    filteredCountry.forEach(function(filteredObj) {
        stringArrayObj.forEach(function (statesObj) {
           if (filteredObj["State Name"] === statesObj.name){
              let cityObj = {name : filteredObj.Name, population : filteredObj.Population}
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
 }

 // Makes array of country objects
cityArray.forEach(function(parseObj) {
   if (newArray.includes(parseObj['Country Name']) === false) {
      newArray.push(parseObj['Country Name'])
      countries = newArray.map(countryNameToCountryObj)
      newArray.sort()
    }
})

// Makes the array of state and city objects to put into the country objects
newArray.forEach(function(country) {
    let filteredCountry = filterCountries(country)
    let stringArrayObj = getArrayofStringObj(filteredCountry)
    pushCities(filteredCountry, stringArrayObj)
    countries[i].states = stringArrayObj
    i++
})

// print the json
let finalThing = JSON.stringify(countries)
fs.writeFileSync('arrayOfObjects2.json', finalThing)