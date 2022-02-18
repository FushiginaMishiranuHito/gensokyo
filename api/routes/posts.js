const express = require('express');
const router = express.Router();
const StalkerPost = require('../models/StalkerPost');

//ROUTES
router.get('/', (req,res) => {
    res.send('We are on posts!')
});

router.post('/', (req,res) => {
    const post = new StalkerPost({
        name: req.body.name,
        age: req.body.age,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        })
})

module.exports = router;