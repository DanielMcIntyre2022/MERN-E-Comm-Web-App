const jwt = require('jsonwebtoken');

const vertifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json('Token is not valid!')
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json('You are not authenticated')
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    vertifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json('You are not permitted');
        }
    });
};

module.exports = {
    vertifyToken,
    verifyTokenAndAuthorization
}