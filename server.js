const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.send('Hello World')
})

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('hotel');
        const guestsCollection = db.collection('guests');
        const guestsRouter = createRouter(guestsCollection)
        app.use('/api/guests', guestsRouter)
    })
    .catch(console.err)


app.listen(port, () => {
    console.log(` ${port}`)
})

