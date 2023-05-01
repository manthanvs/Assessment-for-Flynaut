const express = require('express');
const router = express.Router();
const {getPassports} = require('../controller/passportController');

/* GET users listing. */
router.get("/", function (req, res, next) {
	getPassports(req, res, next);
});


module.exports = router;

