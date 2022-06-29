
import ActivityTracking from "../components/ActivityTracking"
import Logo from "../components/Logo"
import Nav from "../components/Nav"
import SlideMenu from "../components/SideMenu"
import Erreur from "../pages/Erreur"
import { useParams, Navigate } from "react-router-dom";
import ApiFetch from "../utils/apiFetch/ApiFetch";
import { urlMocked } from "../utils/const/urlMocked"
import { urlApi } from "../utils/const/urlApi";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../utils/context/contextApi";

function UserProfil() {


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

    const { id } = useParams();

    /* On fetch les donnée selon l'url */


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

    mainData = ApiFetch(mainDataUrl)
    averageSessionsData = ApiFetch(averageSessionsUrl)
    activityData = ApiFetch(activityUrl)
    perfData = ApiFetch(perfUrl)

    
    return mainData || averageSessionsData || activityData || perfData ?(
        <div className="profil">

            <header>
                <Logo />
                <Nav />
            </header>
            <div className="container">
                <SlideMenu />
                <ActivityTracking mainData={mainData} averageSessionsData = {averageSessionsData} activityData={activityData} perfData={perfData} />
            </div>

        </div>
    ): (
        <Erreur />
    )
}

export default UserProfil