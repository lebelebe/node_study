var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("url이 잘못되었거나 get데이터 경로에서 오류가 있습니다.")
})
router.post('/', (req,res) => {
    res.send("url이 잘못되었거나 post데이터 경로에서 오류가 있습니다.")
})

module.exports = router