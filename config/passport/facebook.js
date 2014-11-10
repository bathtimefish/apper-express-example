/**
* Module dependencies.
*/
var FacebookStrategy = require('passport-facebook').Strategy;
/**
* Expose
*/
module.exports = new FacebookStrategy(
    {
        /* glgl's profile */
        clientID: '[facebook app ID]',
        clientSecret: '[facebook app secret]'
        callbackURL: 'http://localhost:3000/login'
    },
    function(accessToken, refreshToken, profile, done) {
        var options = {
            criteria: { 'facebook.id': profile.id }
        };
        /*
        User.load(options, function (err, user) {
            if (err) return done(err);
            if (!user) {
                user = new User({
                    name: profile.displayname,
                    email: profile.emails[0].value,
                    username: profile.username,
                    provider: 'facebook',
                    facebook: profile._json
                });
                user.save(function (err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                return done(err, user);
            }
        });
        */
        done(null);
    }
);
