const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, User, Winery } = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const posts = await Review.findAll({
        where: {winery_id: req.params.id},
        include: [User, Winery],
    })
    res.json(posts);
})
);

module.exports = router;
