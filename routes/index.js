// Express Router
const router = require('express').Router();

//  API Routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// Incorrect Route Message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;