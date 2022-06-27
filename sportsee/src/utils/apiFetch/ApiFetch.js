import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import ConvertData from './ConvertData';



function ApiFetch (url) {

    const [data, setData] = useState(undefined);
    // url = "f"
    useEffect(() => {
        fetch(url).then((response) => {
                response.json().then((result) => {  
                    setData(ConvertData(result,url))
                    if (data === undefined) {
                        return (
                            <Navigate to="*" />
                        )
                      }
                })
        })
       
       
    }, [url])
    
    
    console.log(data)

    return data ;
    
    
    
}

export default ApiFetch;
