
const express = require('express')
const router = express.Router();
const passport = require("passport");
require("../config/passportConfig")(passport);
require("dotenv").config()

router.route('/')
    .get(
        passport.authenticate("google", { scope: ["email", "profile"] })
    )

router.route('/callback')
    .get(
        passport.authenticate("google", { session: false }),
        (req, res) => {
            jwt.sign(
                { user: req.user },
                "secretKey",
                { expiresIn: "1h" },
                (err, token) => {
                    if (err) {
                        return res.json({
                            token: null,
                        });
                    }
                    res.json({
                        token,
                    });
                }
            );
        }
    )
module.exports = router;