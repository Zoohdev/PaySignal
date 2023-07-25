const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for the About page
app.get('/about', (req, res) => {
  res.send('This is the About page');
});

// Route for the Banking page
app.get('/banking', (req, res) => {
  res.send('This is the Banking page');
});

// Route for the Travel page
app.get('/travel', (req, res) => {
  res.send('This is the Travel page');
});

// Route for the Sign Up page
app.get('/signup', (req, res) => {
  res.send('This is the Sign Up page');
});

// Route for the Discover Banking page
app.get('/discover-banking', (req, res) => {
  res.sendFile(__dirname + '/public/discover_banking.html');
});

// Route for the Purchase Prepaid Electricity page
app.get('/purchase-prepaid-electricity', (req, res) => {
  res.sendFile(__dirname + '/public/purchase_prepaid_electricity.html');
});

// Route for the Top up your Airtime page
app.get('/top-up-airtime', (req, res) => {
  res.sendFile(__dirname + '/public/top_up_airtime.html');
});

// Route for the Book your next Trip page
app.get('/book-your-next-trip', (req, res) => {
  res.sendFile(__dirname + '/public/book_your_next_trip.html');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
