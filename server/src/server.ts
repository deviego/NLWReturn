import express from 'express'

let app = express()

app.get('/user', (req,res) =>{
    return res.send('hello world')
})

app.listen(3333, () => console.log('server is running'))


// SQlite
//prosma