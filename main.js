const express = require('express');
const productRouter = require('./Routers/Product.router');
const roleRouter = require('./Routers/Role.router');
const userRouter = require('./Routers/User.router');
const userGoogleRouter = require('./Routers/UserGoogle.router')
const connection = require('./config/DB');
const cors = require('cors');
let app = express();
const jwt = require("jsonwebtoken");


connection();
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/role', roleRouter);
app.use('/auth/google', userGoogleRouter);

app.listen(8000);

//////////////////////////////////////////
// const passport = require("passport");
// require("./config/passportConfig")(passport);
// require("dotenv").config()


// Redirect the user to the Google signin page 
// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["email", "profile"] })
// );



// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { session: false }),
//     (req, res) => {
//         jwt.sign(
//             { user: req.user },
//             "secretKey",
//             { expiresIn: "1h" },
//             (err, token) => {
//                 if (err) {
//                     return res.json({
//                         token: null,
//                     });
//                 }
//                 res.json({
//                     token,
//                 });
//             }
//         );
//     }
// );
// //<em>// profile route after successful sign inem> 

// app.get(
//     "/profile",
//     passport.authenticate("google", { session: false }),
//     (req, res, next) => {
//         res.send("Welcome");
//     }
// );
///////////////////////////////////////////


