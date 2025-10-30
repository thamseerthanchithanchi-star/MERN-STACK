// mongodb://localhost:27017
const mongoose = require('mongoose')


function RunServer() {
     try{
       mongoose.connect('mongodb://localhost:27017/sample')
       console.log('mongoDB connected!')

     } catch (error) {
        console.log('Not connected')
     }
     




}
module.exports=RunServer;