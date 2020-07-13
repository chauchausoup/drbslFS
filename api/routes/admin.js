const express = require('express')
const router = express.Router();

const AdminController = require('../controllers/admin');


router.post('/location',  AdminController.location_post);
router.post('/hospital',  AdminController.hospital_post);
router.post('/news',  AdminController.news_post);
router.post('/weekDays',  AdminController.weekDays_post);



module.exports=router;
