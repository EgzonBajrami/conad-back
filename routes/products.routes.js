const express = require('express');
const router = express.Router();
const {jsonResponse} = require('../lib/helper');
const upload = require('../services/upload.service')

const {verifyToken} = require('../middleware/auth.middleware');
const productsController = require('../controllers/products.controller');

router.post('/addProduct',verifyToken,async(req,res)=>{
    try{
        const result = await productsController.add(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.post('/addImage/:id',verifyToken,upload.single('product-image'),async(req,res)=>{
    try{
        const result = await productsController.createImage(req.params,req.file);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.get('/getProducts/:id',async(req,res)=>{
    try{
        const result = await productsController.getProducts(req.params.id);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.post('/editProduct/:id',verifyToken, async(req,res)=>{
    try{
        const result = await productsController.editProduct(req.body,req.params.id);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false))
    }
})
router.post('/findProduct',verifyToken,async(req,res)=>{
    try{
        const result = await productsController.findBarcode(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.post('/removeProduct',verifyToken,async(req,res)=>{
    try{
        const result = await productsController.removeProduct(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})




module.exports = router;