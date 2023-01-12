const Product = require('../models/Product');
const {verifyTokenAndAdmin, verifyToken } = require('./verifyToken');
const router = require('express').Router();

// ADD TO CART //

router.post('/', verifyToken, async(req, res) => {
    const newCart = new Product(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
});

// UPDATE PRODUCT //

// router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const upatedProduct = await Product.findByIdAndUpdate(req.params.id, {
//             $set: req.body,
//         }, {new:true});
//         res.status(200).json(upatedProduct);
//     } catch (error){res.status(500).json(error)} {
//     }
// });

// // // DELETE PRODUCT //

// router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id)
//         res.status(200).json('Product has been deleted')
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// // // GET PRODUCTS //

// router.get('/find/:id', async(req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // // GET ALL PRODUCTS //

// router.get('/', async(req, res) => {
//     const queryNew = req.query.new;
//     const queryCatergoy = req.query.category;
//     try {
//         let products;
//         if(queryNew){
//             products = await Product.find().sort({createdAt: -1}).limit(5);
//         } else if (queryCatergoy) {
//             products = await Product.find({categories:{
//                 $in:[queryCatergoy]
//             }
//         });
//     } else {
//         products = await Product.find();
//     }
//     res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });