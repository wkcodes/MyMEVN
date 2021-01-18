// Root of api routes 
const path = require('path');
const router = require('express').Router();
const thingRoutes = require('./api/thing');
const userRoutes = require('./api/user');
// API Routes
router.use('/api', thingRoutes);
router.use('/api', userRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
