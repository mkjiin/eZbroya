import AppHeader from "../../components/appHeader/AppHeader.js";
import NewsComp from "../../components/newsComp/NewsComp.js";
import MainFilters from "../../components/mainFilters/MainFilters.js";
import SecondaryFilters from "../../components/secondaryFilters/SecondaryFilters.js";
import WeaponList from "../../components/weaponList/WeaponList.js";
import FilterButton from "../../components/filterButton/FilterButton.js";
///////

const MainPage = () => {
    return (
        <>
            <AppHeader />
            <NewsComp />
            <MainFilters />
            <div className="content__main">
                <FilterButton />
                <SecondaryFilters />
                <WeaponList />
            </div>
        </>
    );
};

export default MainPage;
