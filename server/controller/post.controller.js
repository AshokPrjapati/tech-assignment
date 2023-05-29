const PostModel = require("../models/post.model");


// get all posts
exports.getAllPost = async (req, res) => {
    try {
        // get cars data with OEM details and dealer's username
        const posts = await PostModel.find().populate('oemSpec').populate('dealer', 'name').exec();
        res.status(200).send({ message: "successfully posted", posts });
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ message: error.message });
    }
}

// create new post
exports.addPost = async (req, res) => {
    const { userId } = req.body;
    req.body.dealer = userId;
    const payload = req.body;
    console.log(req.body)
    try {
        let newPost = new PostModel(payload);
        await newPost.save();
        res.status(200).send({ message: "Post added succesfully", post: newPost });
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
};

// update post
exports.updatePost = async (req, res) => {
    const id = req.params.id;
    const post = await PostModel.findOne({ _id: id });
    const email_post = post.email;
    const email_req = req.body.email;
    try {
        if (email_post !== email_req) return res.status(401).send({ message: "You are not authorized to update post" });
        await PostModel.findByIdAndUpdate({ _id: id }, req.body);
        res.send({ message: "car details updated successfully" })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
};

// delete post
exports.deletePost = async (req, res) => {
    const id = req.params.id;
    const post = await PostModel.findOne({ _id: id });
    const email_post = post.email;
    const email_req = req.body.email;
    try {
        if (email_post !== email_req) return res.status(401).send({ message: "You are not authorized to delete post" });
        await PostModel.findByIdAndDelete({ _id: id });
        res.send({ message: "Car detail deleted successfully" })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
};