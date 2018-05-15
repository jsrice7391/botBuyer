const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

//Load the user model and the settings for the clarification
const User = require("../models/User");
const settings = require("./settings"); //Load the settings file with the password

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id:jwt_payload.id}, function(err,user){
            if(err){
                throw err;
            }
            if(user){
                done(null,user)
            }else{
                done(null,false)
            }
        })
    }))
}

