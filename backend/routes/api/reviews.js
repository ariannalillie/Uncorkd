const express = require('express');
const asyncHandler = require('express-async-handler');

const { Post, User, Winery } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
        includes: [User, Winery],
    })
    res.json(posts);
})
);

module.exports = router;
