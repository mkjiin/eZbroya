import filterIcon from "../../imgs/icons/filter.png";
import { showFilter } from "../secondaryFilters/additionalFiltres/additionalFiltresSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const FilterButton = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div
                className="content__main__button"
                onClick={() => dispatch(showFilter())}
            >
                <h2 className="content__main__button__title">ФІЛЬТРИ</h2>
                <img src={filterIcon} alt="filter" />
            </div>
        </>
    );
};

export default FilterButton;
