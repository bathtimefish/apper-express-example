module.exports = function(app) {

    app.get('/', function(req, res) {
        res.end('api action');
    });

    app.get('/list', function(req, res) {
        res.end('list action');
    });

}
