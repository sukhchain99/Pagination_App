const User = require('../models').User;

module.exports = {
    show(req, res, next) {
        return User
        .findAll()
        .then((users) => {
            
            next();
        })
        .catch((err) => {console.error(err)});
    },
};