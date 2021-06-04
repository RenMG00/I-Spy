const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection_schema = new Schema({
    author_name: {
        type: String,
        required: true,
    },
    author_age: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    pubyear: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

const Books = mongoose.model('books', collection_schema);
module.exports = Books;


