import ua from "../../../imgs/icons/ukraine.png";
import nato from "../../../imgs/icons/nato.png";

import {
    activeFilterChanged,
    activeFilterReset,
} from "../../weaponList/weaponSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

const Countries = () => {
    const dispatch = useAppDispatch();
    const { activeFilter, weaponsLoadingStatus } = useAppSelector(
        (state) => state.weapons
    );

    const handleFilterClick = (filter: string) => {
        if (filter === activeFilter) {
            dispatch(activeFilterReset());
        } else {
            dispatch(activeFilterChanged(filter));
        }
    };

    return (
        <div className="content__sec-filters__country">
            <h2 className="content__sec-filters__title-country">
                Країна постачальник
            </h2>
            <ul className="content__sec-filters__buttons-country">
                <li
                    className={`content__sec-filters__button-country ${
                        activeFilter === "ua" ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick("ua")}
                    // disabled={weaponsLoadingStatus === "loading" ? true : false}
                >
                    <img src={ua} alt="ua" />
                    <div className="content__sec-filters__button-country-name">
                        Україна
                    </div>
                </li>
                <li
                    className={`content__sec-filters__button-country ${
                        activeFilter === "nt" ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick("nt")}
                >
                    <img src={nato} alt="ua" />
                    <div className="content__sec-filters__button-country-name">
                        Країни - партнери
                    </div>
                </li>
                <li
                    className={`content__sec-filters__button-country ${
                        activeFilter === "tr" ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick("tr")}
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/devil.png?alt=media&token=1c3a275b-2f91-4840-9733-042379f6ea92"
                        alt="ua"
                    />
                    <div className="content__sec-filters__button-country-name">
                        Трофеї
                    </div>
                </li>
            </ul>
            <hr className="content__sec-filters__horizontal" />
            <hr className="content__sec-filters__vertical" />
        </div>
    );
};

export default Countries;
