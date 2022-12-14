const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    birthdate:{
        type:Date,
        required:true
    },
    birthplace:{
        type:String,
        required:true
    },
    married:{
        type:String,
        required:true
    },
    children:{
        type:String,
        required:true
    },
    personalId:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email: { 
        type: String, 
        required: true, 
        lowercase: true, 
       
        trim: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] }
        ,
        albanianR:{
            type:String,
            required:true

        },
        serbianR:{
            type:String,
            required:true
        },
        englishR:{
            type:String,
            required:true
        },
        othersR:{
            type:String
        },
        albanianW:{
            type:String,
            required:true

        },
        serbianW:{
            type:String,
            required:true
        },
        englishW:{
            type:String,
            required:true
        },
        othersW:{
            type:String
        },
        word:{
            type:String
        },
        excel:{
            type:String
        },
        powerpoint:{
            type:String
        },
        access:{
            type:String
        },
        windows:{
            type:String
        },
        InternetExp:{
            type:String
        },
        Outlook:{
            type:String
        },
        VisualBasic:{
            type:String
        },
        school:{
            type:String
        },
        university:{
            type:String
        },
        trainings:{
            type:String
        },
        tjera:{
            type:String
        },
        title1:{
            type:String
           },
           insitution1:{
            type:String,
           },
           tasks1:{
            type:String,
        
           },
           startDate1:{
            type:Date
           },
           endDate1:{
            type:Date
           },
           title2:{
            type:String
           },
           insitution2:{
            type:String,
           },
           tasks2:{
            type:String,
        
           },
           startDate2:{
            type:Date
           },
           endDate2:{
            type:Date
           },
        
        
        
        
        
        
        
        
        
        
        
        createdAt: {
            type: Date,
            default: Date.now,
          },
          updatedAt: {
            type: Date,
            default: Date.now,
          },
    },
    {timestamps: {createdAt:'createdAt',updatedAt:'updatedAt'}})
    const applicationModel = new mongoose.model('application',applicationSchema);

    module.exports = applicationModel;