const express = require('express')
const router = express.Router();



const LoginController = require('../controllers/login');

router.post('/',  LoginController.admin_post_login);



module.exports=router;
