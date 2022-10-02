require('dotenv').config()
const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./src/routes/user')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/user', userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running Port : ${PORT}`)
})