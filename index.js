const express = require('express');
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const app = express();

/*Passport.js with redis used for authentication*/
/* 
For authentication, not active yet
app.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    secret: config.redisStore.secret,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
*/
const index = require('./routes/index.js');

app.get('/', index);

app.listen(3000, () => console.log(`Open http://localhost:3000 to see a response.`));