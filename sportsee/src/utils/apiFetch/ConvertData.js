import ActivityData from "../class/ActivityData"

export default function convertData(result,url) {
    if (url.include("/activity")) {
        return new ActivityData(result.data.UserID, result.data.session)
    }

    if (url.include("/activity")) {
        return new ActivityData(result.data.UserID, result.data.session)
    }
}

