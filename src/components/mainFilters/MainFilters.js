import './mainFilters.scss'
import icon from '../../imgs/icons/tank.png'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { useGetFiltersQuery } from '../../api/apiSlice';

const MainFilters = () => {

    const {
        data: filters = [],
        isFetching,
        isLoading,
        isError
    } = useGetFiltersQuery();

    console.log(filters)

    const renderFiltersList = (arr) => {
        if (arr.lenght === 0) {
            return <h5>Помилка</h5>
        } 

        return arr.map(el => {
            return <li
            tabIndex={0}
            className='main_filters__item'
            key={el.id}
            >
                <img src={el.img} alt="tank"/>
                <h3>{el.label}</h3>
            </li>
        })
    }

    const elements = renderFiltersList(filters)
    return (
        <div className='main_filters'>
            <h2 className='main_filters__title'>Оберіть категорію</h2>
            <hr className='main_filters__first-line'/>
            <ul className='main_filters__grid'>
                {elements}
            </ul>
            <hr className='main_filters__second-line'/>
        </div>
    )
}

export default MainFilters;

// MainFilterItem
//                     tabIndex={0}
//                     key={id}
//                     // {...props}