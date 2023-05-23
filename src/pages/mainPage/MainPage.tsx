import AppHeader from "../../components/appHeader/AppHeader";
import NewsComp from "../../components/newsComp/NewsComp";
import MainFilters from "../../components/mainFilters/MainFilters";
import SecondaryFilters from "../../components/secondaryFilters/SecondaryFilters";
import WeaponList from "../../components/weaponList/WeaponList";
import FilterButton from "../../components/filterButton/FilterButton";
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
