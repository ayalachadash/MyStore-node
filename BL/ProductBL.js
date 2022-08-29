const Product = require('../models/Product.model');
const jfile = require('jsonfile');

const getAll = () => {
    return new Promise((resolve, reject) => {
        resolve(Product.find({}), (err)=>{
            if(err){
                reject(err);
            }
        });
    })
}

const getById = (id) => {
    console.log("id " + id);
    return new Promise((resolve, reject) => {
        resolve(Product.findById(id), (err)=>{
            if(err){
                reject(err)
            }
        });
    })
}

const create = (obj) => {
    return new Promise((resolve, reject) => {
        resolve(Product.create(obj), function (err) {
            if (err) {
                reject(err);
            }
        });
    })
}


const update = (id, obj) => {
    return new Promise((resolve, reject) => {
        resolve(Product.findByIdAndUpdate(id, obj), (err) => {
            if (err) {
                reject(err);
            }
        })
    })
}


const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        resolve(Product.findByIdAndDelete(id), function (err) {
            if (err) {
                reject(err);
            }
        });
    })
}

const sendBill = (obj) => {
    jfile.writeFile('./bill.js', (obj), function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("send you bill");
        }
    })
}


module.exports = { getAll, getById, create, update, deleteProduct }