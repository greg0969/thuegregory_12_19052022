import DailyActivity from "./DailyActivity";
import Length from "./Length";
import Intensity from "./Intensity";
import Score from "./Score";
import Macro from "./Macro";
import { useParams,Navigate } from "react-router-dom";
import ApiFetch from "../utils/apiFetch/ApiFetch";
import {urlMocked} from "../utils/const/urlMocked"
import {urlApi} from "../utils/const/urlApi";
import { useContext } from "react";
import { FetchContext } from "../utils/context/contextApi";
// import PropTypes from "prop-types";

/**
 * @param {String} userData userName
 * @returns ReactComponent
 */
 

function ActivityTracking() {

  /* Utilisation du use context pour savoir si on récupère les data de l'API ou les donnéees mockées */

  const { fetch } = useContext(FetchContext)

  let nouveauTitre = "SportSee (using) " + fetch; 
  document.title = nouveauTitre; 

  let mainData;
  let averageSessionsData;
  let activityData;
  let perfData;
  let mainDataUrl;
  let averageSessionsUrl;
  let activityUrl;
  let perfUrl;

  const {id} = useParams();


  /* si on veut les données de l'API alors on utilise les urls de l'API */
  
 
  if (fetch === "api") {
    
     mainDataUrl = urlApi.userMainData(id)
     averageSessionsUrl = urlApi.userAverageSession(id)
     activityUrl = urlApi.userActivity(id)
     perfUrl = urlApi.userPerf(id)
  }

    /* si on veut les données mockées alors on utilise les urls des données mockées*/

  if (fetch === "mock") {
     mainDataUrl = urlMocked.userMainData(id)
     averageSessionsUrl = urlMocked.userAverageSession(id)
     activityUrl = urlMocked.userActivity(id)
     perfUrl = urlMocked.userPerf(id)
  }

  /* On fetch les donnée selon l'url */

  mainData = ApiFetch(mainDataUrl)
  averageSessionsData = ApiFetch(averageSessionsUrl)
  activityData = ApiFetch(activityUrl)
  perfData = ApiFetch(perfUrl)



  return (
     
    <div className="activityContainer">
     { mainData &&<h1>Bonjour<p className="username">{mainData.userInfos.firstName}</p></h1>}
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        {activityData &&<DailyActivity activityData={activityData.sessions}/>}
        {averageSessionsData &&<Length averageSessionsData={averageSessionsData}/>}
        {perfData &&<Intensity perfData={perfData.data}/>}
        {mainData &&<Score scoreData={mainData.todayScore ?? mainData.score} />}
        {mainData &&<Macro macroData={mainData.keyData} />} 
      </section>
    </div>
  );

}

export default ActivityTracking;
