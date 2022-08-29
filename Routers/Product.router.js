const express = require('express')
const router = express.Router();
const productBL = require('../BL/ProductBL');
const auth = require('../middleware/Auth.middleware');

router.route('/')
    .get(auth, async function (req, res) {
        let data = await productBL.getAll();
        return res.json(data);
    })

router.route('/:id')
    .get(auth, async function (req, res) {
        let id = req.params.id;
        let data = await productBL.getById(id);
        return res.json(data);
    })


router.route('/')
    .post(auth, async function (req, res) {
        let obj = req.body;
        let data = await productBL.create(obj);
        return res.json(data);
    })


router.route('/:id')
    .put(auth, async function (req, resp) {
        let obj = req.body;
        let id = req.params.id;
        await productBL.update(id, obj);
        return resp.json('updated');
    })


router.route('/:id')
    .delete(auth, async function (req, resp) {
        let id = req.params.id;
        let data = await productBL.deleteProduct(id);
        return resp.json(data);
    })


module.exports = router;
