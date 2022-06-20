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
 * @description Component ActivityTracking
 * @param {string} userData userName
 * @returns ReactComponent
 */


function ActivityTracking() {

  /* Utilisation du use context pour savoir si on récupère les data de l'API ou les donnéees mockées */

  const { fetch } = useContext(FetchContext)

  let mainData;
  let averageSessionsData;
  let activityData;
  let perfData;
  let userData ;
  let macroData;
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

  

 console.log(fetch)

  /* On fetch les donnée selon l'url */

  mainData = ApiFetch(mainDataUrl)
  averageSessionsData = ApiFetch(averageSessionsUrl)
  activityData = ApiFetch(activityUrl)
  perfData = ApiFetch(perfUrl)
  userData = mainData.userInfos
  macroData = mainData.keyData

  // if (mainData && averageSessionsData && activityData && perfData) {
  //   return (
  //     <Navigate to="*" />
  //   )
  // }

  return fetch === "api" ?(
     
    <div className="activityContainer">
     { mainData.data &&<h1>Bonjour<p className="username">{mainData.data.userInfos.firstName}</p></h1>}
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        {activityData.data &&<DailyActivity activityData={activityData.data.sessions}/>}
        {averageSessionsData.data &&<Length averageSessionsData={averageSessionsData.data}/>}
        {perfData.data &&<Intensity perfData={perfData.data.data}/>}
        {mainData.data &&<Score scoreData={mainData.data.todayScore ?? mainData.data.score} />}
        {mainData.data &&<Macro macroData={mainData.data.keyData} />} 
      </section>
    </div>
  ):(
    <div className="activityContainer">
     {userData &&<h1>Bonjour<p className="username">{userData.firstName}</p></h1>}
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        <DailyActivity activityData={activityData.sessions}/>
        <Length averageSessionsData={averageSessionsData}/>
        <Intensity perfData={perfData.data}/>
        {mainData.todayScore &&<Score scoreData={mainData.todayScore} />}
        {macroData &&<Macro macroData={macroData} />} 
      </section>
    </div>
  );
}

export default ActivityTracking;
