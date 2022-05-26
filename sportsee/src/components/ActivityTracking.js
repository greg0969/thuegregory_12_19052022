import DailyActivity from "./DailyActivity";
import Length from "./Length";
import Intensity from "./Intensity";
import Score from "./Score";
import { USER_MAIN_DATA} from "../mockedDataUser12";
import Macro from "./Macro";

function ActivityTracking() {

  return (
    <div className="activityContainer">
      <h1>
        Bonjour <p className="username">{USER_MAIN_DATA[0].userInfos.firstName}</p>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <section>
        <DailyActivity />
        
        <Length />
        <Intensity />
        <Score />
        <Macro />
      </section>
    </div>
  );
}

export default ActivityTracking;
