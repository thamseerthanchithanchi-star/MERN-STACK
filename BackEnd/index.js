const express = require('express')
const RunServer = require('./database/connection');
const userRouter = require('./routes/userRoutes');
const cors = require('cors')


const app = express() //2
const PORT = 3000 //3

app.use(express.json()) //4
//json ; javascript object orientation
// used to transmit the data in json format
app.use(cors())
// cors cross origin resource sharing
// to connect frontend(5173) and backend(300)


app.get('/',(req,res)=>   {
    res.json('backend connected') //sending the messeage in json
})

RunServer()//5

app.use('/api',userRouter) 

app.listen(PORT,  ()=> {
    console.log(`sever is running on http://localhost:${PORT}`)
})