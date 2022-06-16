import DailyActivity from "./DailyActivity";
import Length from "./Length";
import Intensity from "./Intensity";
import Score from "./Score";
import Macro from "./Macro";
import { useParams } from "react-router-dom";
import ApiFetch from "../utils/apiFetch/ApiFetch";
// import Erreur from "./Erreur";
import {urlMocked} from "../utils/const/urlMocked"
import {urlApi} from "../utils/const/urlApi";
import { useContext } from "react";
import { FetchContext } from "../utils/context/contextApi";


function ActivityTracking() {

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

  if (fetch === "api") {
    
     mainDataUrl = urlApi.userMainData(id)
     averageSessionsUrl = urlApi.userAverageSession(id)
     activityUrl = urlApi.userActivity(id)
     perfUrl = urlApi.userPerf(id)
  
  }

  if (fetch === "mock") {
     mainDataUrl = urlMocked.userMainData(id)
     averageSessionsUrl = urlMocked.userAverageSession(id)
     activityUrl = urlMocked.userActivity(id)
     perfUrl = urlMocked.userPerf(id)
  }  

   mainData = ApiFetch(mainDataUrl)
   averageSessionsData = ApiFetch(averageSessionsUrl)
   activityData = ApiFetch(activityUrl)
   perfData = ApiFetch(perfUrl)
   userData = mainData.userInfos
   macroData = mainData.keyData
  
   console.log(mainData)

  return (
     
    <div className="activityContainer">
     {userData &&<h1>Bonjour<p className="username">{userData.firstName}</p></h1>}
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        {/* <DailyActivity activityData={activityData.sessions}/>
        <Length averageSessionsData={averageSessionsData}/>
        <Intensity perfData={perfData.data}/>
        {mainData.todayScore &&<Score scoreData={mainData.todayScore} />}
        {macroData &&<Macro macroData={macroData} />}  */}
      </section>
    </div>
  );
}

export default ActivityTracking;
