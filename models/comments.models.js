const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
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
const commentModel = new mongoose.model('comment',commentSchema);
module.exports = commentModel;
