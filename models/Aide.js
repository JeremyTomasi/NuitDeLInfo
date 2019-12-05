const mongoose = require('mongoose');

const Event = new mongoose.Schema({
  title: {type:String, default:""}
})

module.exports = mongoose.model('Event',Event)
