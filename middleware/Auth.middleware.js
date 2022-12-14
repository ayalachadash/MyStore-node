const jwt = require("jsonwebtoken");
const config = require("../config/config");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {

        const token = authHeader.split(" ")[1];


        // if(token){
 
        //     // Verify the token using jwt.verify method
        //     const decode = jwt.verify(token, config.TOKEN_KEY);
     
        //     //  Return response with decode data
        //     res.json({
        //         login: true,
        //         data: decode
        //     });
        //     console.log(decode);
        // }else{
     
        //     // Return response with error
        //     res.json({
        //         login: false,
        //         data: 'error'
        //     });
        // }
        // return next();

        if (!token) {
            console.log("nott token");
            return res.status(401).send("not token");
        }
        console.log("token" + token);


        jwt.verify(token, config.TOKEN_KEY, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }
            req.user = user;
            console.log("user", user);
        })
        return next();
    } else {
        return res.status(401).send("not token");
    }
};

module.exports = verifyToken;