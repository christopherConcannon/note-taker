const express = require('express');
const path = require('path');

// const db = require('./db/db.json')

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;


app.use(express.static('public'));

// MIDDLEWARES intercept data before it reaches POST route
// parse incoming string or array data from form
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// Router Middleware
// if client navigates to '<host>/api', use router set up in apiRoutes/index.js
app.use('/api', apiRoutes);
// if client navigates to '<host>/', use router set up in htmlRoutes/index.js
app.use('/', htmlRoutes);






app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
