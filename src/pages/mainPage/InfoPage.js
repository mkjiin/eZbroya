import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import IntroSecPage from "../../components/introSecPage/IntroSecPage";
import AdditionalInfoSecPage from "../../components/additionalInfoSecPage/AdditionalInfoSecPage";
import YouTube from "../../components/youTube/YouTube";
import Links from "../../components/links/Links";
import { useEffect } from "react";

const InfoPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <AppHeaderInfoPage/>
            <IntroSecPage/>
            <AdditionalInfoSecPage/>
            <YouTube/>
            <Links/>
        </>
    )
}

export default InfoPage;