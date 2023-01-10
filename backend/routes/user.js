const {vertifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const router = require('express').Router();

router.put('/:id', verifyTokenAndAuthorization, (req, res) => {
    // if(req.user.id === req.params.id || req.user.isAdmin) {

    // }
});

module.exports = router;