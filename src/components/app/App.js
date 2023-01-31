import AppHeader from "../appHeader/AppHeader";
import NewsComp from "../newsComp/NewsComp";
import MainFilters from "../mainFilters/MainFilters";
import SecondaryFilters from "../secondaryFilters/SecondaryFilters";
import WeaponList from "../weaponList/WeaponList";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <NewsComp/>
            <MainFilters/>
            <div className='content__main'>
                <div>
                <SecondaryFilters/>
                
                </div>
                <WeaponList/>
            </div>
        </div>
    )
}

export default App;