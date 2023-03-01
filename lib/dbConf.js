const mongoose = require('mongoose');

module.exports = {
    connect:() =>{
        mongoose.connect('mongodb+srv://Egzon:xoni1234@cluster0.tptcxvt.mongodb.net/Conad',(err)=>{
            if(err){
                console.log(err)
            }
            console.log('connected to db');
        })
    }
}