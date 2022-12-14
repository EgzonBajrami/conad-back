const express = require('express');
const router = express.Router();
const offertsController = require('../controllers/offerts.controller')
const {jsonResponse} = require('../lib/helper')
const upload = require('../services/upload.service')

const {verifyToken} = require('../middleware/auth.middleware');
router.get('/getOffert',async(req,res)=>{
    try{
        const result = await offertsController.getOffert();
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.post('/addOffert', async(req,res)=>{
    try{
        const result = await offertsController.createOffert(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
        
    }

})
router.post('/add-image/:id/:index', verifyToken, upload.single('offert-image'), async(req,res)=>{
    try{
        const result = await offertsController.createImage(req.params.id,req.file,req.params.index);
        res.json(jsonResponse(result));
        
    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})

module.exports = router;