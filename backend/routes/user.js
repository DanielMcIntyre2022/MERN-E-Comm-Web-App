
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
    } catch (error){res.status(500).json(err)} {
        
    }
});

module.exports = router;