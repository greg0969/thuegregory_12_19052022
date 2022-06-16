
import { useParams } from "react-router-dom";
import ApiFetch from "../utils/apiFetch/ApiFetch";
import {urlMocked} from "../utils/const/urlMocked"
import {urlApi} from "../utils/const/urlApi";

function Title() {

    const {id} = useParams();
    const mainDataUrl = urlMocked.userMainData(id)
    const mainData = ApiFetch(mainDataUrl)


    console.log(mainData)
    return (
        <div>
            <h1>Bonjour{mainData.userInfos.firstName && <p className="username">{mainData.userInfos.firstName}</p>}</h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
        
    )
}

export default Title

