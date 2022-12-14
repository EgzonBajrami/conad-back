const express = require('express');
const router = express.Router();
const {jsonResponse} = require('../lib/helper');
const {verifyToken} = require('../middleware/auth.middleware');const commentsController = require('../controllers/comments.controller')


router.post('/',async(req,res)=>{
    try{
        const result = await commentsController.createComment(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.get('/getComments', verifyToken, async(req,res)=>{
    try{
        const result = await commentsController.getComments();
        res.json(jsonResponse(result));
        
    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})


module.exports = router;