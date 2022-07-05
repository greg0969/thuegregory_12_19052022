import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import ConvertData from './ConvertData';



function ApiFetch(url) {

    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetch(url).then((response) => {
            response.json().then((result) => {
                setData(ConvertData(result, url))
            })
        }, [])
    })

    return data;

}
export default ApiFetch;
