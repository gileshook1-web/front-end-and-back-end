const app = require('./app.js')
const port = 3000

app.listen(port, () => {
    console.log(`Fruit API listening on port ${port}`)
})