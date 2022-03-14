const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema({
    balance: {type:Number, required:true},
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("/masterAccount", masterAccountSchema);