/*!
* Module dependencies.
*/
var passport = require('passport');

module.exports = function (app) {
    require('./config/passport')(passport);
    app.use(passport.initialize());
    app.use(passport.session());
    app.set('passport', passport);
};

