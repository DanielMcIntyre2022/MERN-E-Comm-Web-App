const Order = require('../models/Order');
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require('express').Router();

// CREATE / ADD TO ORDER //

router.post('/', verifyToken, async(req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOder = await newOrder.save()
        res.status(200).json(savedOder)
    } catch (error) {
        res.status(500).json(error)
    }
});

// UPDATE ORDER //

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const upatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new:true});
        res.status(200).json(upatedOrder);
    } catch (error){res.status(500).json(error)} {
    }
});

// DELETE ORDER //

router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
});

//  GET USER ORDERS //

router.get('/find/:userId', verifyTokenAndAuthorization, async(req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL //

router.get('/', verifyTokenAndAdmin, async(req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
});