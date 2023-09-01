const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Define your route
app.get('/', (req, res) => {
  // Provide the username value here (replace with your dynamic data)
  const username = "John Doe";
  
  // Render the EJS template and pass the username
  res.render('appointment', { username });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
