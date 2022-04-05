import React, { useEffect, useState} from 'react';
import axios from 'axios';
import $ from 'jquery';

const Interview = (props) => {
    // 함수형 컴포넌트에서는 this 주의할 것
    let[interviewId, interviewIdUpdate] = useState([]);
    const[typeData, insertDB] = useState(0);
    const titletext = props.titlenm;

    const interviewPublic = async () => {
        axios({
            url: `/preinterview?type=${props.type}`,
            method: "POST",
        })
        .then(
            (result) => {

                // select전용
               try{
                   interviewIdUpdate([...result.data]);
                   insertDB(result.data[result.data.length - 1].wr_id);
               }
               catch(err){console.log("result 타입 확인할 것"+err.message+"/"+typeof result)}


            }
        )
        .catch(
            (e) => {
                console.log(e+'이유로 통신이 불안정함')
            }
        )
    }
    useEffect(
        () => {
            interviewPublic();
        }, [typeData]
    )

    return(
        <div>
            <h2>{interviewId.length > 0 ? titletext : "데이터전송중"}</h2>
            {
                interviewId.map( (content, i) => {
                    return(
                        // key={유니크한 것 = primary key}
                        <li key={content.wr_id}>
                            <h3>{i+1}. {content.wr_q}</h3><div>{content.wr_a}</div>
                        </li>
                    )
                })
            }
        </div>
    );
}
export default Interview;
