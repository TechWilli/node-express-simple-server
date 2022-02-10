const express = require('express')
const path = require('path')

const baseTemplatePath = path.join(__dirname, '../../../templates')

const courses = express.Router()

courses.get('/', (req, res) => {
  res.sendFile(`${baseTemplatePath}/courses.html`)
})

module.exports = courses