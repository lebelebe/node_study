var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('getsend도 나온다더라')
})

module.exports = router;