export const urlApi = {
    
    userMainData(id) {
        return `http://localhost:3000/user/${id}`
    },

    userActivity(id) {
        return `http://localhost:3000/user/${id}/activity`
    },

    userAverageSession(id) {
        return `http://localhost:3000/user/${id}/average-sessions`
    },

    userPerf(id) {
        return `http://localhost:3000/user/${id}/performance`
    }

}
