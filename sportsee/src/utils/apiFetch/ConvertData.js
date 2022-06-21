import ActivityData from "../class/ActivityData"
import AverageSessionData from "../class/AverageSessionData"
import PerfData from "../class/PerfData"
import MainData from "../class/MainData"


export default function convertData(result,url) {

    if (url.includes("/activity")) {
        return new ActivityData(result.data.userId, result.data.sessions)
    }

    if (url.includes("/USER_ACTIVITY.json")) {
        return new ActivityData(result.userId, result.sessions)
    }

    if (url.includes("/average-sessions")) {
        return new AverageSessionData(result.data.userId, result.data.sessions)
    }

    if (url.includes("/USER_AVERAGE_SESSIONS.json")) {
        return new AverageSessionData(result.userId, result.sessions)
    }

    if (url.includes("/performance")) {
        return new PerfData(result.data.id, result.data.kind, result.data.data)
    }

    if (url.includes("/USER_PERFORMANCE.json")) {
        return new PerfData(result.id, result.kind, result.data)
    }

    if (url.includes("/USER_MAIN_DATA.json")) {
        return new MainData(result.id, result.userInfos, result.todayScore,result.score, result.keyData)
    }

    else {
        return new MainData(result.data.id, result.data.userInfos, result.data.todayScore,result.data.score ,result.data.keyData)
    }

}

