module.exports = function(app) {
    //controller loading
    var pageController = require('../controller/pagescontroller');
    var plantDataController = require('../controller/plantDataController');
    var confController = require('../controller/hpsDataController');

    //routes request conf
    //home
    app.route('/')
	.get(pageController.show_page);

    //plant Info
    app.route('/plantinfo/save')
    .post(plantDataController.addData);

    app.route('/plantinfo/getinfo')
    .post(plantDataController.getData);

    //sistem Info
    app.route('hydropsinfo/putinfo')
    .post(confController.putConf);

    //default
    app.use(pageController.show_page);
}