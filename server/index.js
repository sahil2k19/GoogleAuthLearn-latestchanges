const express = require('express')
const app = express()
const port = 8080
const session = require('express-session');
const passport = require('passport')
var cookieParser = require('cookie-parser');
require('./auth/authentication');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
    secret: "strongsecretkeyyyyy",
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());
  

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    //res.redirect('/');
    res.end('Logged in!');
  })









app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))
  