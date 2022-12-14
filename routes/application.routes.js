const express = require('express');
const router = express.Router();
const {jsonResponse} = require('../lib/helper');
const applicationController = require('../controllers/application.controller')
const {verifyToken} = require('../middleware/auth.middleware');

router.post('/create', async(req,res)=>{

    try{
        const result = await applicationController.create(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.get('/allApplications',verifyToken, async(req,res)=>{
    try{
        const result = await applicationController.findAllApp();
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.get('/singleApplication/:id',verifyToken, async(req,res)=>{
    try{
        const result = await applicationController.findSingleApplication(req.params.id);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})


module.exports = router;