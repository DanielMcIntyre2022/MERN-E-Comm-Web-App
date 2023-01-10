const router = require('express').Router();
const User = require('../models/User');
const Cryptojs = require('crypto-js');

// REGISTER //
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

module.exports = router;