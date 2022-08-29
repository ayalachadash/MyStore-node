const express = require('express')
const router = express.Router();
const RoleBL = require('../BL/RoleBL');

router.route('/')
    .get( async function (req, res) {
        let data = await RoleBL.getAll();
        return res.json(data);
    })

router.route('/:id')
    .get( async function (req, res) {
        let id = req.params.id;
        let data = await RoleBL.getById(id);
        return res.json(data);
    })


router.route('/')
    .post( async function (req, res) {
        let obj = req.body;
        let data = await RoleBL.create(obj);
        return res.json(data);
    })


router.route('/:id')
    .put( async function (req, resp) {
        let obj = req.body;
        let id = req.params.id;
        await RoleBL.update(id, obj);
        return resp.json('updated');
    })


router.route('/:id')
    .delete( async function (req, resp) {
        let id = req.params.id;
        let data = await RoleBL.deleteRole(id);
        return resp.json(data);
    })


module.exports = router;
