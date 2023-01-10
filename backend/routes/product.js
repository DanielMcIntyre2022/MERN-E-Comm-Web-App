const Product = require('../models/Product');
const {vertifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const router = require('express').Router();
const Cryptojs = require('crypto-js');

// CREATE/ADD PRODUCTS //

router.post('/', verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
});

// UPDATE PRODUCT //

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
        try {
            const upatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new:true});
            res.status(200).json(upatedProduct);
        } catch (error){res.status(500).json(error)} {
        }
    });

// // DELETE USER //
router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json('Product has been deleted')
        } catch (error) {
            res.status(500).json(error)
        }
    });

// // GET USER //
// router.get('/find/:id', verifyTokenAndAdmin, async(req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const { password, ...others} = user._doc;
//         res.status(200).json(others);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // GET ALL USERS //
// router.get('/', verifyTokenAndAdmin, async(req, res) => {
//     const query = req.query.new
//     try {
//         const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // GET USER STATS //
// router.get('/stats', verifyTokenAndAdmin, async(req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
//     try {
//         const data = await User.aggregate([
//             {$match: {createdAt: {$gte: lastYear}}},
//             {$project: {month: {$month: '$createdAt'}}},
//             {$group: {_id: '$month', total: {$sum: 1}}}
//         ]);
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

module.exports = router;