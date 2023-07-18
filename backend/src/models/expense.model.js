const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    amount: {type: Number, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    description: {type: String},
    necessity: {type: Number, required: true},
    category: {type: String, required: true},
    subCategories: {type: [String]},
}, {
    timestamps: true,
    autoIndex: true
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;