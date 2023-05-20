const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/',(req,res)=>{
  res.send('Hello hii!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
connectToMongo();