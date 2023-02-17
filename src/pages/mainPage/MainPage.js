import AppHeader from "../../components/appHeader/AppHeader";
import NewsComp from "../../components/newsComp/NewsComp";
import MainFilters from "../../components/mainFilters/MainFilters";
import SecondaryFilters from "../../components/secondaryFilters/SecondaryFilters";
import WeaponList from "../../components/weaponList/WeaponList";
///////
import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import IntroSecPage from "../../components/introSecPage/IntroSecPage";
import AdditionalInfoSecPage from "../../components/additionalInfoSecPage/AdditionalInfoSecPage";
import YouTube from "../../components/youTube/YouTube";
import Links from "../../components/links/Links";

const MainPage = () => {
    return (
        <>
            <AppHeader/>
            <NewsComp/>
            <MainFilters/>
            <div className='content__main'>
                <SecondaryFilters/>
                <WeaponList/>
            </div>
        </>
    )
}

export default MainPage;