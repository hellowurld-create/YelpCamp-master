const mongosse = require('mongoose'); 
const Schema = mongosse.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number
});

module.exports = mongosse.model('Review', reviewSchema);