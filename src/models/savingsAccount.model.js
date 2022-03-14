const mongoose = require('mongoose');

const savingsAccountSchema = new mongoose.Schema({
    account_number: {type:String, required:true, unique:true},
    balance: {type:String, required:true},
    interestRate: {type:String, required:true},
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("/savingsAccount", savingsAccountSchema);