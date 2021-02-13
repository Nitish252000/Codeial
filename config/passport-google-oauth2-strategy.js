const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');

//tell passort to use a new strategy for google Login
passport.use(new googleStrategy({
        clientID:"262242743584-jv3tcpm3255l461lvdc92rbslrkc3s0a.apps.googleusercontent.com",
        clientSecret:"dJCyHQnemxI84neFrnPnm55c",
        callbackURL:"http://localhost:8000/users/auth/google/callback",
    },
    function(accessToken,refreshToken,profile,done){
        //find a user
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('err in google strategy-passport',err); return;}
            console.log(accessToken,refreshToken);
            console.log(profile);
            if(user){
                //if found, set the user as req.user
                return done(null,user);
            }else{
                //if not found, create the user and set it as req.user
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){console.log('error in creating user google strategy-passport',err); return;}
                    return done(null,user)
                }); 
            }
        });
    }
));
module.exports=passport;