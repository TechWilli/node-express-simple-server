const express = require('express')
const path = require('path')
// instanciado a função de rotas do express
const users = express.Router()

// pegando da pasta template os arquivos html necessários para cada rota
const baseTemplatePath = path.join(__dirname, '../../../templates')

users.get('/', (req, res) => {
  res.sendFile(`${baseTemplatePath}/users.html`)
})

module.exports = users