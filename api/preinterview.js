var express = require('express');
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')


router.use(express.urlencoded({extended: true})) // 미들웨어 urlencoded


router.post('/', (req, res, next) =>{
    var type = req.query.type;
    //~~~~~?botable=interview
    //리액트에서 주소요청
    req.body.mapper = "IntroduceSql" //mapper의 namespace로 설정

    if( type ){  
        switch(type){
            //사전인터뷰 글보기, 글쓰기 , 글수정
            case 'interviewlist' : req.body.crud = "select"; // select, insert, update, delete 중에 하나
                         req.body.mapper_id = "interview"; //sql문 정보를 담고있는 객체의 id
                         break; //localhost:3000/preinterview?type=list
            case 'interviewwrite': req.body.crud = "insert"; 
                         req.body.mapper_id = "interviewInsert";
                         break; //localhost:3000/preinterview?type=interviewwrite
            case 'interviewmodify': req.body.crud = "update"; 
                         req.body.mapper_id = "interviewModify";
                         break; //localhost:3000/preinterview?type=modify
            //면접제안 글보기, 글쓰기
            case 'meetinglist' : req.body.crud = "select"; // select, insert, update, delete 중에 하나
                         req.body.mapper_id = "meeting"; //sql문 정보를 담고있는 객체의 id
                         break; //localhost:3000/preinterview?type=list
            case 'meetingwrite': req.body.crud = "insert"; 
                         req.body.mapper_id = "meetingInsert";
                         break; //localhost:3000/preinterview?type=write
            default      : req.body.crud = "delete"; 
                          req.body.mapper_id = "interviewDrop";
                          break; //localhost:3000/preinterview?type=존재한다면
        }      
  
            router.use('/', awssql )
            next('route')
     }
     else{        
         // 평범한 라우팅은 이쪽으로 보낸다.
         //localhost: 3000/preinterview 
          router.use('/', normalpage )
          next('route')
     }   
  

})

module.exports = router;