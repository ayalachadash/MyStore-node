const express = require('express')
const router = express.Router();

const UserBL = require('../BL/UserBL')
//new user
router.route('/signUp')
    .post(async function (req, res) {
        let obj = req.body
        let data = await UserBL.signUp(obj);
        //return data;
        return res.json(data);
    })

router.route('/signIn')
    .get(async function (req, res) {
        let obj = req.body
        let data = await UserBL.signIn(obj);
        //return data;
        return res.json(data);
    })

router.route('/')
    .get(async function (req, res) {
        let data = await UserBL.getAll();
        res.status(200).json(data);
    })

module.exports = router;
