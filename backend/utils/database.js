const mongoose=require('mongoose');

require('dotenv').config();

const connectWithDB=async()=>{
    try{
        await mongoose.connect(process.env.Database_Url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log("Error in DB Connection",err);
    }
}

module.exports=connectWithDB;