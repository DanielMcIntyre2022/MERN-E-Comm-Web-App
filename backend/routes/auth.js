const router = require('express').Router();
const User = require('../models/User');
const Cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER //
router.post('/register', async (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)

        return next();
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

// LOGIN //

router.post('/login', async (req, res) => {
    try {

        // attempt to find the user in database //
        const user = await User.findOne({ username: req.body.username });

        // if user entered doesn't match which is in the database throw an error //
        if (!user) {
            res.status(401).json('wrong credentials!')
        } 

        var hashedPassword = Cryptojs.AES.decrypt(user.password, process.env.PASS_SEC);
        var Orginalpassword = hashedPassword.toString(Cryptojs.enc.Utf8);

        //  check if password entered matches the orignal password entered during registration, if not return error //
         if ( Orginalpassword !== req.body.password ) {
            res.status(401).json('wrong credentials!');
    
                var accessToken = jwt.sign({
                    id: user._id, 
                    isAdmin: user.isAdmin
                },
                    process.env.JWT_SEC,
                    {expiresIn:'3d'}
                );
            
            var { password, ...others} = user._doc;
         }
          else  {

            // if password and username both match successfully log user in //

            return res.status(200).json({...others, accessToken})
            
          }
          
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

module.exports = router;