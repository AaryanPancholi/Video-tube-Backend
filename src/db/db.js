const mongoose=require('mongoose');
const {Db_NAME}=require('../constants')
require('dotenv').config();

const db=async()=>{
    try{
     const    connectionInstance=
       await mongoose.connect(`${process.env.MONGODB_URL}/${Db_NAME}`)
            console.log(`\n MongoDB connected !! DB Host :${connectionInstance.connection.host}`)
     
     
    }
    catch(error){
        console.log("Error:",error)
        process.exit(1)
        
    }
}
module.exports=db