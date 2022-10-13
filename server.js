import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})