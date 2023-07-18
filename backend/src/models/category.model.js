const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true, dropDups: true, trim: true, minLength: 3},
    parentCategory: {type: String},
    subCategories: {type: [String]},
    description: {type: String}
}, {
    timestamps: true,
    autoIndex: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;