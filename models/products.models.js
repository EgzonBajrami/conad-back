const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
  
    barcode:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
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
const productModel = new mongoose.model('produkte',productSchema);

module.exports = productModel;