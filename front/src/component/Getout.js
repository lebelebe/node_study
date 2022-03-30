import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Get(){
    const [origintext, originUpdate] = useState('먼저 내가 있을게');

    useEffect( async () => {

        const getdata = await axios.get('/getsend');
        originUpdate(getdata);
    }
    ,[] );


    return(
        <div>{origintext}</div>
    )
};