import express from "express"
import bp from "body-parser"
import morgan from "morgan"

const app = express()

app.use(bp.urlencoded({ extended: true, json: true }))
app.use(bp.json())
app.use(morgan('dev'))

const db = []

app.get('/', (req, res) => {
  res.send('Hello World! my own server another text')
})

app.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  }

  db.push(newTodo)

  res.json(newTodo)
})

app.get('/todo', (req, res) => {
  res.json(db)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})