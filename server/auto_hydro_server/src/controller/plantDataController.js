var mongoose = require('mongoose');
var plantInfo = mongoose.model('plantsInfo');

exports.addData = function (req, res) {
    newInfo = new plantInfo({
        session: "Plant_Test_0",
        plant: "pianta sticazzi (sticazzibus)",
        plantFam: "cazzatee",
        date: req.body.date,
        envTemp: req.body.envData.temperature,
        envHumid: req.body.envData.humidity,
        watTemp: req.body.waterData.temperature,
        watLvl: req.body.waterData.level,
        watPh: req.body.waterData.pH,
        watNut: req.body.waterData.solidN
    });
    newInfo.save(function(err, info) {
        console.log("mannaia la puttana")
		if (err)
			res.send(err);
        res.status(201).json(info);
	});
}; 

exports.getData = function (req, res) {

};