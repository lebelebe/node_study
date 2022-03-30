var express = require('express');
var router = express.Router();

router.post('/', (req,res,next) =>{
    res.send({
        'post1': '첫번째',
        'post2': '두번째',
        'post3': '세번째'
    })
})

module.exports = router