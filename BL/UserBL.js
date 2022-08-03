const User = require("../models/User.mode");
const jwt = require('jsonwebtoken');
const config = require("../config/config");

const createToken = (user) => {
    let level;
    if(user.name=="ayala"&& user.password=="955"){
        level = "manager";
    }
    else{
        level="user";
    }
    return jwt.sign(
        
        { name: user.name, password: user.password, level: level },
        config.TOKEN_KEY,
        {
            expiresIn: "24h",
        }
    );
}


const signUp = (obj) => {
    return new Promise(async (resolve, reject) => {
        let { name, password } = obj;
        let findUser = await User.find(User.findOne({ name, password }));
        if (findUser.length >= 1) {
            reject("this user exist");
        } else {
            User.create(obj, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(createToken(obj))
                }
            })
        }
    });

};


const findUser = (name, password) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(User.findOne({ name, password }));
        } catch (error) {
            reject("cantUser");
        }
    });
};

const signIn = (obj) => {
    return new Promise(async (resolve, reject) => {
        let { name, password } = obj;
        let findUser = await User.find(User.findOne({ name, password }));
        if (findUser.length === 0) {
            reject("this user not exist");
        } else {
            resolve(createToken(obj))
        }
    });
};

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(User.find({}));
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    signUp,
    findUser,
    getAll,
    signIn
};
