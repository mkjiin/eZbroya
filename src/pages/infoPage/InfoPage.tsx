import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import IntroSecPage from "../../components/introSecPage/IntroSecPage";
import AdditionalInfoSecPage from "../../components/additionalInfoSecPage/AdditionalInfoSecPage";
import YouTube from "../../components/youTube/YouTube";
import Links from "../../components/links/Links";
import LoadingPage from "../loadingPage/LoadingPage";
import { useEffect } from "react";
import { fetchedInfoPage } from "./infoPageSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useParams } from "react-router-dom";

const InfoPage = () => {
    const { pageInfo, pageLoadingStatus } = useAppSelector(
        (state) => state.infoPage
    );
    const dispatch = useAppDispatch();

    const { type, id } = useParams();

    const typingType = type as string;
    const typingId = id as string;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchedInfoPage({ typingType, typingId }));
    }, []);

    if (pageLoadingStatus === "loading") {
        return <LoadingPage />;
    }

    return (
        <>
            <AppHeaderInfoPage />
            <IntroSecPage />
            <AdditionalInfoSecPage />
            <YouTube />
            <Links />
        </>
    );
};

export default InfoPage;
