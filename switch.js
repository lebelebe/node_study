var inputdata = 'interview';
var[num, orderby] = ['','']

switch(inputdata){
    case 'interview' : 
        num=5
        orderby = 'asc';
        break;
    case 'portfolio' : 
        num=10
        orderby='desc';
        break;
    case 'qna' :
        num=3
        orderby='desc';
        break;
    default :alert('그런 테이블은 없습니다.'); break;
}

select `subject`, `content` from `order` where `wr_name` = `방%` limit 0,10 order by desc;

테이블명 : promotion
필드명 : 금액(amount), 고객명(nm), 날짜(order_day)

주문자 방보영의 최근주문 5개 보내주세요

select `amount`, `order_day` from `promotion` where `nm` = `방보영` order by `order_day` desc limit 0,5;