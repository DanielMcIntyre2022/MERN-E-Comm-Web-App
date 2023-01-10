const User = require('../models/User');
const {vertifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const router = require('express').Router();

// UPDATE //
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password) {
        req.body.password = Crypto.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }
    try {
        const upatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new:true});
        res.status(200).json(upatedUser);
    } catch (error){res.status(500).json(error)} {
        console.log(error)
    }
});


// DELETE //
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;