const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookInfo = new Schema({
    title: String,
    authors: [String],
    description: String,
    img: {
        type: {String},
    },
    link: {
        type: String,
    }
});

const Book = mongoose.model("Book", BookInfo);
module.exports = Book;