import fs from 'fs'
import saveToJSON from './saveJson.js'

/*
const readFile = fs.readFileSync('./lista.csv', {encoding: 'latin1', flag: 'r'})


const novoReadFile = readFile

const removedLineBreak = novoReadFile.split(/\r\n|\n/);


console.log(removedLineBreak);*/

const csvToJson = (fileName) => {
    const csv = fs.readFileSync(fileName, "utf8")
    let lines = csv.split("\r\n")
    const headers = lines[0].split(",")
    headers.pop()
    const data = lines.slice(1)
    const json = data.map((line) => {
      const obj = {}
      const currentLine = line.split(",")
      headers.forEach((header, index) => {
        obj[header] = currentLine[index]
      })
      return obj
    })
    let a = 'R$'
    for (let i = 0; i < json.length; i++) {
      const sifrao = a.concat(json[i].preco)
      json[i].preco = sifrao.replaceAll(".", ",")
    }
    for (let i = 0; i < json.length; i++) {
      let numberId = parseInt(json[i].id)
      json[i].id = numberId
    }
    saveToJSON(json, 'arquivo.json')
    console.log(json);
}
  csvToJson('./lista.csv')
