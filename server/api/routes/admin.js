const express = require('express')
const router = express.Router();

const AdminController = require('../controllers/admin');

router.post('/',AdminController.admin_post_login);
router.get('/',AdminController.admin_get_login)


module.exports=router;
