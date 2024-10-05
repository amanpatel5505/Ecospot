const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(cors())
port = process.env.PORT || 5001

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(port , () =>
    console.log(`Server is Running at port : ${port}`)
)
