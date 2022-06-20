import ActivityData from "../class/ActivityData"
import AverageSessionData from "../class/AverageSessionData"
import PerfData from "../class/PerfData"
import MainData from "../class/MainData"

export default function convertData(result,url) {
    
    if (url.include("/activity")) {
        return new ActivityData(result.data.id, result.data.sessions)
    }

    if (url.include("/activity")) {
        return new ActivityData(result.data.id, result.data.sessions)
    }

    if (url.include("/average-sessions")) {
        return new AverageSessionData(result.data.id, result.data.sessions)
    }

    if (url.include("/average-sessions")) {
        return new AverageSessionData(result.data.id, result.data.sessions)
    }

    if (url.include("/performance")) {
        return new PerfData(result.data.id, result.data.kind, result.data.data)
    }

    if (url.include("/performance")) {
        return new PerfData(result.data.id, result.data.kind, result.data.data)
    }

    if (url.include("/")) {
        return new MainData(result.data.id, result.data.userInfos, result.data.todayScore, result.data.keyData)
    }

    if (url.include("/")) {
        return new MainData(result.data.id, result.data.session)
    }

}

