module.exports = function(app) {

    var passport = app.set('passport');


    app.get('/', function(req, res) {
        res.end('alo alo');
    });

    app.get('/dump', function(req, res) {
        res.end('dumped');
    });

    app.get('/login',
        passport.authenticate(
            'facebook',
            {
                scope: [ 'email', 'user_about_me'],
                failureRedirect: '/login'
            }
        ),
        function(req, res) {
            res.end('sigin in');
        }
    );
}
