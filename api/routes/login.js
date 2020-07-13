const express = require('express')
const router = express.Router();



const LoginController = require('../controllers/login');

router.post('/',  LoginController.admin_post_login);
router.get('/',LoginController.admin_get_login)


module.exports=router;
