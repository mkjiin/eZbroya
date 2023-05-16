import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
    activeStatusChange,
    activeStatusReset,
} from "../../weaponList/weaponSlice";

const Status = () => {
    const dispatch = useAppDispatch();
    const { activeStatus } = useAppSelector((state) => state.weapons);

    const handleFilterClick = (status: string) => {
        if (status === activeStatus) {
            dispatch(activeStatusReset());
        } else {
            dispatch(activeStatusChange(status));
        }
    };

    return (
        <div className="content__sec-filters__status">
            <h2 className="content__sec-filters__title-country">
                Статус техніки
            </h2>
            <ul className="content__sec-filters__buttons-country">
                <li
                    className={`content__sec-filters__button-country ${
                        activeStatus === "yep" ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick("yep")}
                >
                    <div className="content__sec-filters__button-country-name">
                        В наявності
                    </div>
                </li>
                <li
                    className={`content__sec-filters__button-country ${
                        activeStatus === "no" ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick("no")}
                >
                    <div className="content__sec-filters__button-country-name">
                        В очікуванні
                    </div>
                </li>
            </ul>
            <hr className="content__sec-filters__horizontal" />
        </div>
    );
};

export default Status;
