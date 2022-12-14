var express = require('express');
var router = express.Router();
const {jsonResponse} = require('../lib/helper');
const userController = require('../controllers/users.controller.js')
const authController = require('../controllers/auth.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', async(req,res)=>{
  try{
    console.log(req.body)
    const result = await userController.add(req.body);
  
    res.json(jsonResponse(result));

  }catch(err){
    res.status(400).json(jsonResponse(err.message,false));
  }
})
router.post('/login', async(req,res)=>{
  try{
    const result = await authController.login(req.body);
    res.json(jsonResponse(result));
  }catch(err){
    res.json(jsonResponse(err.message,false));
  }
})

module.exports = router;
