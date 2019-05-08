let fs = require('fs')
let content
let array = []

fs.readFile('./citiesData.csv', function read(err, data) {
    if (err) {
        throw err
    }
    content = data.toString()

    console.log("line: ", content, "\n")
    
})

