require('dotenv').config()
const port = process.env.PORT
const app = require('./app.js')

app.listen(port, () => {
    console.log(`Fruit API listening on port ${port}`)
})

