import React, { useEffect, useState} from 'react';
import axios from 'axios';
import $ from 'jquery';

const Interviewform = (props) => {
    
    const submitClick = async (type, e) => { 

        const fnValidate = (e) =>{
                if(!$('#agreeTerm').is(':checked')){   
                    alert("동의하시게나");
                    $('label[for="agreeTerm"]').addClass('notice');                 
                    return false;
                }
                return true; // 제일 아래에 있어야 한다.
              }
          var time = new Date(); 
         
          if(fnValidate()){ // 동의했기때문에 데이터 모아서 이제 비동기로 노드한테 보내야겟다
           
            var  jsonstr = decodeURIComponent($("[name=\'"+props.type+"\']").serialize());           
            var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') 
            json_form = "{"+ json_form.replace(/=/gi, '\":\"') + "}"   
            // json화 시킴
            try{
                axios({
                    url: `/preinterview?type=${props.type}`,
                    header:{
                        "Content-Type":"application/json",
                    },
                    method:"POST",
                    body: json_form,

                })
                .then(
                    (result) => {
                        try{
                            console.log(result);

                            if(result.data === 'success'){
                                alert("인터뷰가 등록되었습니다.")
                            }
                        }
                        catch(err){ console.log("타입확인 : "+err.message); }
                    }
                )              
                .catch(
                    (e => { console.log(e+'이유로 데이터 못옴'); })
                )
            }
            catch(err){
                console.log("서버통신 문제 : "+err)
            }
        }
    }



    return(
    <div>
        <h2>{ props.titlenm }</h2>
        <form  action=''  method='post' name={props.type}>
            <div className='formStyle'>
                <dl>
                    <dt><label htmlFor='wr_q'>인터뷰제목</label></dt>
                    <dd>
                        <input type='text' name='wr_q' id="wr_q" required />
                    </dd>
                </dl>
                <dl>
                    <dt><label htmlFor="wr_a">인터뷰내용</label></dt>
                    <dd>
                        <textarea rows={5} name="wr_a" id="wr_a" required >

                        </textarea>
                    </dd>
                </dl>
                <div className="agree">
                    <input type="checkbox" id="agreeTerm" />
                    <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                </div>
                <a href="#none" onClick={e => { submitClick(props.type, e) }}  className='btn' > 인터뷰올리기 </a>
            </div>
        </form> 
   </div>
    );
}
export default Interviewform;
