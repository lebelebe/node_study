import React, { useEffect, useState} from 'react';
import axios from 'axios';

const Interview = (props) => {
    let[interviewId, interviewIdUpdate] = useState([]);
    const[typeData, insertDB] = useState(0);

    const interviewPublic = async () => {
        await axios.get(
            `/preinterview?type=${props.type}`
        )
        .then(
            (result) => {
               try{
                   interviewIdUpdate([...result.data]);
                   insertDB(result.data[result.data.length - 1].wr_id);
               }
               catch(err){console.log(err.message)}
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
            <h2>{interviewId.length > 0 ? "사전인터뷰" : "데이터전송중"}</h2>
            {
                interviewId.map( (content, i) => {
                    return(
                        <li>
                            <h3>{i+1}. {content.wr_q}</h3><div>{content.wr_a}</div>
                        </li>
                    )
                })
            }
        </div>
    );
}
export default Interview;
