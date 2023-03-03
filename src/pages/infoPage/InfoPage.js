import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import IntroSecPage from "../../components/introSecPage/IntroSecPage";
import AdditionalInfoSecPage from "../../components/additionalInfoSecPage/AdditionalInfoSecPage";
import YouTube from "../../components/youTube/YouTube";
import Links from "../../components/links/Links";
import { useEffect } from "react";
import { fetchedInfoPage } from "./infoPageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const InfoPage = () => {

    const { pageInfo, restOfLink } = useSelector(state => state.infoPage)
    const dispatch = useDispatch();

    const { type, id } = useParams();

    // const originType = type.replace(/__/g, ' ');
    // console.log(type)
    // console.log(originType)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchedInfoPage({type, id}))
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