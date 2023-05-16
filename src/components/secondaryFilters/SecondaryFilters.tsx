import "./secondaryFilters.scss";

import Countries from "./countries/Countires";
import YearFilter from "./yearFilter/YearFilter";
import Status from "./status/Status";
import AdditionalFiltres from "./additionalFiltres/additionalFilter";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hideFilter } from "./additionalFiltres/additionalFiltresSlice";

const SecondaryFilters = () => {
    const { activeCategory } = useAppSelector((state) => state.weapons);
    const { filterShowStatus } = useAppSelector(
        (state) => state.additionalFiltres
    );

    const dispatch = useAppDispatch();

    // const handleOverlayClick = (e: React.MouseEvent) => {
    //     if (e.target.classList.contains("content__overflow")) {
    //         dispatch(hideFilter());
    //     }
    // };

    useEffect(() => {
        if (filterShowStatus) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [filterShowStatus]);

    return (
        <div
            className={
                filterShowStatus
                    ? "content__overflow"
                    : "content__overflow-hide"
            }
            // onClick={handleOverlayClick}
        >
            <div
                className={
                    filterShowStatus
                        ? "content__sec-filters_active"
                        : "content__sec-filters"
                }
            >
                <div
                    className="content__sec-filters__back-button"
                    onClick={() => dispatch(hideFilter())}
                >
                    <h2 className="content__sec-filters__back-button__title">
                        Назад
                    </h2>
                </div>
                <Countries />
                {activeCategory === "Танки" ||
                activeCategory === "Самохідні Артилерійські Установки" ||
                activeCategory === "Бойові Машини Піхоти" ||
                activeCategory === "Протиповітрянна Оборона" ? (
                    <Status />
                ) : (
                    ""
                )}
                {activeCategory === "Інше" ? "" : <AdditionalFiltres />}
                <YearFilter />
                {/* <button className='content__sec-filters__button-country'></button> */}
            </div>
        </div>
    );
};

export default SecondaryFilters;
