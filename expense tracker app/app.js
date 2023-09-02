const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const sequelize = require('./util/database');
const financesRoutes = require('./routes/finances');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/finances', financesRoutes);

// Initialize the database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Error handling (place this at the end)
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
});
