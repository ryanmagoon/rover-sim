const fs = require('fs')
const readLine = require('readline')

const fileName = process.argv[2]

const lineReader = readLine.createInterface({
  input: fs.createReadStream(fileName)
})

lineReader.on('line', line => {
  console.log('Line from file:', line)
  console.log('array from line:', line.split(''))
})
