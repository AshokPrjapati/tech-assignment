const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    modelImage: String,
    modelName: String,
    modelYear: String,
    modelPrice: Number,
    modelColor: String,
    modelMileage: Number,
    odometerKM: Number,
    majorScratch: String,
    accidents: Number,
    buyers: Number,
    registerPlace: String,
    email: String
})


const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;