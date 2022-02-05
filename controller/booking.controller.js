const Booking = require('../model/booking.model')

// add booking
const addBooking = async (req, res) => {
  try {
    const myBookingData = req.body

    if (
      !myBookingData.username ||
      !myBookingData.email ||
      !myBookingData.phone
    ) {
      return res.status(422).json({ message: 'All fields are required' })
    }

    const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!myBookingData.email.match(emailReg)) {
      return res.status(422).json({ message: 'Invaild email' })
    }

    const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    if (!myBookingData.phone.toString().match(phoneReg)) {
      return res.status(422).json({ message: 'Invaild phone number' })
    }

    const myData = new Booking({
      ...myBookingData,
    })
    await myData.save()

    return res.status(200).json({
      status: 200,
      bookData: myData,
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

//retrive booking
const retriveBooking = async (req, res) => {
  try {
    const getBookingData = await Booking.find()

    return res.status(200).json({
      status: 200,
      bookData: getBookingData,
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

//update booking
const updateBooking = async (req, res) => {
  try {
    const booking = req.body

    const bookingData = new Booking({
      _id: req.params.id,
      ...booking,
    })
    await Booking.updateOne({ _id: req.params.id }, bookingData)

    return res.json({
      status: 200,
      message: 'updated successfully',
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

const deleteBooking = async (req, res) => {
  try {
    await Booking.deleteOne({ _id: req.params.id })

    return res.json({
      status: 200,
      message: 'deleted successfully',
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

//deleteAll
const deleteAllBooking = async (req, res) => {
  try {
    await Booking.deleteMany()

    return res.json({
      status: 200,
      message: 'All deleted successfully',
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

module.exports = {
  addBooking,
  retriveBooking,
  updateBooking,
  deleteAllBooking,
  deleteBooking
}
