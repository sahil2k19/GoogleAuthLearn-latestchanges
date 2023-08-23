var passport = require('passport');


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '440877516726-6ve6p578n19ddhn7q1cc7acnd8cn1mbs.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8080/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("this is profile", profile)
    cb(null, profile);
  }
));


passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });