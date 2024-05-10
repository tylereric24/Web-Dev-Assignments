import express from 'express'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: 'public',
        headers: {
            "Content-Type": "text/js"
        }
    })
})

app.listen(5000)