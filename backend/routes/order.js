const Order = require('../models/Order');
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require('express').Router();

// CREATE / ADD TO ORDER //

router.post('/', verifyToken, async(req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;