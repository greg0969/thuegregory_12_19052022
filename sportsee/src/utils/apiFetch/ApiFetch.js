import { useEffect, useState } from 'react';


function ApiFetch (url) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url).then((response) => response.json()).then((result) => {
            setData(result)
        })
    }, [url])
    return data ;
}

export default ApiFetch;

