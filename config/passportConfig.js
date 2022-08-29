const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require('../models/User.mode');
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        //clientID: process.env.CLIENT_ID,
        clientID: "409131998509-e0atfm0mic3jka7phnhjse963iq1c21q.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/auth/google/callback",
        passReqToCallback: true,
    },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                let existingUser = await User.findOne({ 'email': profile.emails[0].value });
                // if user exists return the user 
                if (existingUser) {
                    console.log("this user exist");
                    return done(null, existingUser);
                }
                // if user does not exist create a new user 
                console.log('Creating new user...');
                console.log(profile.displayName);
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value
                    // method: 'google',
                    // google: {
                    //     id: profile.id,
                    //     name: profile.displayName,
                    //     email: profile.emails[0].value
                    // }
                });
                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                return done(error, false)
            }
        }
    ));
}
