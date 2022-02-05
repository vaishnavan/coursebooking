const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: true,
  },
},
    {timestamps: true}
)

module.exports = mongoose.model('Booking', bookingSchema);