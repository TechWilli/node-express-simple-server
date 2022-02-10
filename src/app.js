const express = require('express')
const path = require('path')
// importando rotas
const users = require('./routes/users')
const courses = require('./routes/courses')

const app = express()
const PORT = 3000
const baseTemplatePath = path.join(__dirname, '../templates')

app.use(express.static('public'))

// usando as rotas
app.use('/users', users)
app.use('/courses', courses)

app.get('/', (req, res) => {
  res.sendFile(`${baseTemplatePath}/index.html`)
})

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}`)
})