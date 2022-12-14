const express = require('express');
const { sendMailToNewMember } = require('../BL/SendEmail');
const router = express.Router();

const UserBL = require('../BL/UserBL')
//new user
router.route('/signUp')
    .post(async function (req, res) {

        let obj = req.body;
        let data = await UserBL.signUp(obj);
        return res.json(data);
    })
// router.route('/signUp')
//     .post(async function (req, res) {
//         try{
//             let obj = req.body;
//             let data = await UserBL.signUp(obj);
//             return res.json(data);
//         }catch(err){
//             console.log("errrr");
//         }

//     })

router.route('/signIn')
    .get(async function (req, res) {
        let obj = req.body;
        let data = await UserBL.signIn(obj);
        return res.json(data);
    })

router.route('/')
    .get(async function (req, res) {
        let data = await UserBL.getAll();
        res.status(200).json(data);
    })


router.route('/sendEmail')
    .post(async function (req, res) {
        console.log("hello send email");
        let obj = req.body;
        let data = await sendMailToNewMember(obj.mail, obj.name, obj.txt);
        return res.json(data);
    })

module.exports = router;
