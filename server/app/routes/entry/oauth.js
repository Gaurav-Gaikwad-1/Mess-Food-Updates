const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("handling OAuth");
});

module.exports = router;