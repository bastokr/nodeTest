const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://skpark:abc135@cluster0-iwzue.mongodb.net/test?retryWrites=true&w=majorityport = 5000',
{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false     }
).then(()=>console.log('Connect Mongodb connect .........')).catch(err=>console.log(err))
 




app.get('/', (req, res) => res.send('Hello World!---안녕하세요'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))