const express = require('express');
const router = express.Router();
const StalkerPost = require('../models/StalkerPost');

//ROUTES
router.get('/', async(req,res) => {
    try {
        const posts = await StalkerPost.find();
        res.json(posts);
    } catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    const post = new StalkerPost({
        name: req.body.name,
        age: req.body.age,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;