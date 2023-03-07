import filterIcon from '../../imgs/icons/filter.png'
import { showFilter } from '../secondaryFilters/secondaryFiltresSlice'
import { useDispatch } from 'react-redux'

const FilterButton = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="content__main__button" onClick={() => dispatch(showFilter())}>
               <h2 className='content__main__button__title'>ФІЛЬТРИ</h2>
               <img src={filterIcon} alt="filter"/>
            </div>
        </>
    )
}

export default FilterButton;