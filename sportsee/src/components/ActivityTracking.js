import DailyActivity from "./DailyActivity";
import Length from "./Length";
import Intensity from "./Intensity";
import Score from "./Score";
import Macro from "./Macro";
import PropTypes from "prop-types";

/**
 * @param {String} mainData mainData
 * @param {String} averageSessionsData averageSessionsData
 * @param {String} activityData activityData
 * @param {String} perfData perfData
 * @returns {JSX} ReactComponent
 */


function ActivityTracking({mainData,averageSessionsData, activityData, perfData}) {

  return (
    <div className="activityContainer">
      {mainData && <h1>Bonjour<p className="username">{mainData.userInfos.firstName}</p></h1>}
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        {activityData && <DailyActivity activityData={activityData.sessions} />}
        {averageSessionsData && <Length averageSessionsData={averageSessionsData} />}
        {perfData && <Intensity perfData={perfData.data} />}
        {mainData && <Score scoreData={mainData.todayScore ?? mainData.score} />}
        {mainData && <Macro macroData={mainData.keyData} />}
      </section>
    </div>
  )

}

ActivityTracking.propTypes = {
  mainData: PropTypes.object,
  averageSessionsData: PropTypes.object,
  activityData: PropTypes.object,
  perfData: PropTypes.object,
};

export default ActivityTracking;
