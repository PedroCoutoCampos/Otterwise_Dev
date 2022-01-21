/* 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. 
Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. 
Use essa informação para gerar os CEP’s dentro dessa faixa. */

import { input } from 'console-input'
import axios from 'axios'
import fs from 'fs'


const main = async () => {
  try {
    const cep = inputCep()
    const { logradouro, bairro, localidade, uf } = await searchFromCep(cep)
    const data = {
      logradouro,
      bairro,
      localidade,
      uf,
    }
    saveToJSON(data, 'arquivo.json')
  } catch (error) {
    console.log('Erro')
  }
}

main()

const inputCep = () => input('Digite seu cep: ')

const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log('Ocorreu um erro')
  }
}

const saveToJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
}