const express = require('express')
const cors = require('cors')




const app =express()

let corOptions={
    origin:'https://localhost:8081'
}

//middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))



//routers

const router = require ('./routes/Addissue.js')
app.use('/api/issue',router)
const router1 = require('./routes/AddAgent.js')
app.use('/api/agent',router1)

const PORT = process.env.PORT || 8080

//server

app.listen(PORT,()=>{

    console.log(`server is running on port ${PORT} `)
})

