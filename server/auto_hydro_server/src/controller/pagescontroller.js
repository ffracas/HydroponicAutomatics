exports.show_page = function(req, res) {
    res.sendFile(appRoot + '/www/index.html');
}