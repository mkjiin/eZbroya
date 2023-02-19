import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import IntroSecPage from "../../components/introSecPage/IntroSecPage";
import AdditionalInfoSecPage from "../../components/additionalInfoSecPage/AdditionalInfoSecPage";
import YouTube from "../../components/youTube/YouTube";
import Links from "../../components/links/Links";
import { useEffect } from "react";
import { fetchedInfoPage } from "./infoPageSlice";
import { useDispatch, useSelector } from "react-redux";

const InfoPage = () => {

    const { pageInfo, restOfLink } = useSelector(state => state.infoPage)
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchedInfoPage(restOfLink))
    }, [])

    // const { name, introInfo, country_icon, description, img } = pageInfo 

    // const pageInfoProps = { name, introInfo, country_icon, description, img };

    return (
        <>
            <AppHeaderInfoPage />
            {/* <IntroSecPage {...pageInfoProps}/> */}
            <IntroSecPage/>
            <AdditionalInfoSecPage/>
            <YouTube/>
            <Links/>
        </>
    )
}

export default InfoPage;