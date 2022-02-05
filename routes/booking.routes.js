const express = require('express');
const { addBooking, retriveBooking, updateBooking, deleteAllBooking, deleteBooking } = require('../controller/booking.controller');
const router = express.Router();

router.post('/addBooking', addBooking);
router.get('/getBooking', retriveBooking);
router.put('/updateBooking/:id', updateBooking)
router.delete('/deleteBooking/:id', deleteBooking)
router.delete('/deleteAllBooking', deleteAllBooking)

module.exports = router;