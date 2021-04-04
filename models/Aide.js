const mongoose = require('mongoose');

const Event = new mongoose.Schema({
  link: {type:String, default:""},
  motd: {type:String, default:""},
  title: {type:String, default:""},
  description:{type:String, default:""},
  webLink:{type:String, default:""},
  tab1:{type:Array, default:[]},
  tab2:{type:Array, default:[]},
  listDoc:{type:Array, default:[]},
  carte:{type:String, default:""},
  color:{type:String, default:""}
})

module.exports = mongoose.model('Event',Event)
