const express = require('express');
const asyncHandler = require('express-async-handler');

const { Winery } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const wineries = await Winery.findAll();
    res.json(wineries);
}))

module.exports = router;
