const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("Form",formSchema);