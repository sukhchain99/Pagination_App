var express = require('express');
var router = express.Router();
var userController = require('../controllers').user;

var totalRecords = 0;
var pageSize = 5;
var pageCount = 0;
var start = 0;
var currentPage = 1;
var sort='_id';
var order='DESC';


const models = require('../models');

// router.use('/', userController.show);

router.use('/', function(req, res, next) {
  models.User.count().then((count) => {
    {
      totalRecords = count;
      console.log("\n "+totalRecords+"\n ");
      pageCount = Math.ceil(totalRecords / pageSize);
    }

    if (typeof req.query.page !== 'undefined') {
      currentPage = req.query.page;
    }

    if (currentPage > 0) {
      start = (currentPage - 1) * pageSize;
      console.log(currentPage);
    }
    next();
  }).catch((err) => {
    res.render('error', { err })
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  

  models.User.findAll({ offset: start, limit: pageSize, order: [
    [sort, order],
], }).then((users)=>{
    
    res.render('index', { users: users, pageSize: pageSize, pageCount: pageCount,
                          currentPage: currentPage});
  }).catch((err)=>{
    res.render('error', { err });
  });
});


module.exports = router;
