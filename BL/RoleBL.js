const Role = require('../models/Role.model');

const getAll = () => {
    return new Promise((resolve, reject) => {
        resolve(Role.find({}), (err)=>{
            if(err){
                reject(err);
            }
        });
    })
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        resolve(Role.findById(id), (err)=>{
            if(err){
                reject(err)
            }
        });
    })
}

const create = (obj) => {
    return new Promise((resolve, reject) => {
        resolve(Role.create(obj), function (err) {
            if (err) {
                reject(err);
            }
        });
    })
}


const update = (id, obj) => {
    return new Promise((resolve, reject) => {
        resolve(Role.findByIdAndUpdate(id, obj), (err) => {
            if (err) {
                reject(err);
            }
        })
    })
}


const deleteRole = (id) => {
    return new Promise((resolve, reject) => {
        resolve(Role.findByIdAndDelete(id), function (err) {
            if (err) {
                reject(err);
            }
        });
    })
}



module.exports = { getAll, getById, create, update, deleteRole }