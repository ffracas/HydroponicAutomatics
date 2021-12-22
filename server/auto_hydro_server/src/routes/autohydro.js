module.exports = function(app) {
    //controller loading
    var pageController = require('../controller/pagescontroller');

    //routes request conf
    //home
    app.route('/')
	.get(pageController.show_page);

    //default
    app.use(pageController.show_page);
}