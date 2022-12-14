const mongoose = require('mongoose');

const offertSchema = new mongoose.Schema({
    start:{
        type:Date,
        required:true,
    },
    end:{
        type:Date,
        required:true,
    },
    images:[
        {
            type:String,
          
        }
    ],
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
const offertModel = new mongoose.model('offert',offertSchema);
module.exports = offertModel;
