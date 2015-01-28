var express = require('express');
var app = express();

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: '510556379084100',
        clientSecret: 'dc77a8769ac5ce940a612032851afb29',
        callbackURL: "http://127.0.0.1:4000/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            done(null, profile);
        
    }
));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
app.get('/',function(req,res){
    res.send('<a href="/auth/facebook">Login with Facebook</a>');
})
app.listen(80);
