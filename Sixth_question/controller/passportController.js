var passportSchema = require("../model/passportModel");

getPassports = (req, res, next) => {
	token.find((err, response) => {
		if (err) res.send("Exception Occured");
		else res.send(response);
	});
};

module.exports = {
	getPassports,
};
