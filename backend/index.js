const express = require('express')
const { conncetion } = require('./config/db')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is our Project Home Page")
})

app.listen(4500, async () => {
    try {
        await conncetion
        console.log("Connected to db")
    } catch (err) {
        console.log("not connected to db")
    }
    console.log('server runnint at 4500')
})