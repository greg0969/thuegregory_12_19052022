import { useEffect, useState } from 'react';
import ConvertData from './ConvertData';


function ApiFetch (url) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url).then((response) => response.json()).then((result) => {
            setData(ConvertData(result,url))
        })
    }, [url])
    return data ;
    
}

export default ApiFetch;
