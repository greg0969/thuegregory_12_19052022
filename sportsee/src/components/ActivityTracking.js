import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useParams } from "react-router-dom";
import CaloriesTracking from "./CaloriesTracking";
import DailyActivity from "./DailyActivity";
import Length from "./Length";
import Intensity from "./Intensity";
import Score from "./Score";
import {
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockedData";

function ActivityTracking() {
  const { id } = useParams();

  const connectedUser = USER_MAIN_DATA.find(
    (user) => user.id.toString() === id
  );
  return (
    <div className="activityContainer">
      <h1>
        Bonjour <p className="username">{connectedUser.userInfos.firstName}</p>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        <DailyActivity />
        <Length />
        <Intensity />
        <Score />
        <CaloriesTracking  keyData={connectedUser.keyData}/>
      </section>
    </div>
  );
}

export default ActivityTracking;
