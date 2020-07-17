const express = require('express')
const router = express.Router();

const HospitalController = require('../controllers/hospital');

router.get('/',  HospitalController.get_hospital_all);


module.exports=router;


