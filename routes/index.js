const router = require('express').Router();

// import all routes
const apiRoutes = require('./api');

// add prefix /api to all routes in the api directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('404 Error');
});

module.exports = router;