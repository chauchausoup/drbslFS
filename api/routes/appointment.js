const express = require('express')
const router = express.Router();

const AppointmentController = require('../controllers/appointment');

router.get('/',  AppointmentController.get_appointments_all);
router.get('/:appointmentId',  AppointmentController.get_appointment_single);
router.patch('/:appointmentId',  AppointmentController.update_appointment_single);

router.post('/',AppointmentController.post_appointment_single)

module.exports=router;


