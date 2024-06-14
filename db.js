const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoURI = process.env.MONGO_URI;
const mongoDB = async() => {
   await mongoose.connect(mongoURI,{useUnifiedTopology: true},async(err,result)=>{  
       if(err) console.log("---",err)
       else{
        console.log("connected");
    
    }
            
           
            
        });
    }

    module.exports = mongoDB();