// npm modules
const router = require('express').Router();

// landing page
router.get('/', (req, res) => {
    res.sendFile('../../public/index.html');
});