const commentModel = require('../models/comments.models')

module.exports = {
    createComment: async(params) =>{
        console.log(params);

        const result = await commentModel.create({name:params[0],surname:params[1],number:params[2],email:params[3],comment:params[4]})
        return result;
    },
    getComments:async() =>{
        const result = await commentModel.find().limit(9).sort('-createdAt');
        return result;
    }

}