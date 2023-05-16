import "./mainFilters.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { activeCategoryChanged } from "../weaponList/weaponSlice";
import { Category, fetchedCategories } from "./mainFilterSlice";
import { additionalFiltresIdChange } from "../secondaryFilters/additionalFiltres/additionalFiltresSlice";

const MainFilters = () => {
    const { category } = useAppSelector((state) => state.categories);
    const { activeCategory } = useAppSelector((state) => state.weapons);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchedCategories());
    }, []);

    // console.log(filters)

    const onClick = (name: string, id: number) => {
        dispatch(activeCategoryChanged(name));
        dispatch(additionalFiltresIdChange(id));
    };

    const renderFiltersList = (arr: Category[]) => {
        if (arr.length === 0) {
            return <h5>Помилка</h5>;
        }

        return arr.map(({ id, name, label, img }) => {
            return (
                <button
                    tabIndex={0}
                    className={`main_filters__item ${
                        activeCategory === name ? "active" : ""
                    }`}
                    key={id}
                    disabled={name === activeCategory}
                    onClick={() => onClick(name, id)}
                >
                    <img src={img} alt="tank" />
                    <h3>{label}</h3>
                </button>
            );
        });
    };

    const elements = renderFiltersList(category);
    return (
        <div className="main_filters">
            <h2 className="main_filters__title">Оберіть категорію</h2>
            <hr className="main_filters__first-line" />
            <ul className="main_filters__grid">{elements}</ul>
            <hr className="main_filters__second-line" />
        </div>
    );
};

export default MainFilters;

// MainFilterItem
//                     tabIndex={0}
//                     key={id}
//                     // {...props}
