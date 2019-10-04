const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const { MONGO_URI, COOKIE_SECRET } = require('./config/keys');

const app = express();

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Failed to connect to database', err));

require('./models/User');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_SECRET]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.get('/user', (req, res) => res.json(req.user));

app.use('/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
