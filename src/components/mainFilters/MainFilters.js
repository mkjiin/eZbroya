import './mainFilters.scss'
import icon from '../../imgs/icons/tank.png'
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {  useChangeCategoryMutation , useGetWeaponsQuery} from '../../api/apiSlice';
import { activeCategoryChanged } from '../weaponList/weaponSlice';
import { fetchedCategories } from './mainFilterSlice';

const MainFilters = () => {

    // const {
    //     refetch
    // } = useGetWeaponsQuery();

    const { category, categoryLoadingStatus} = useSelector(state => state.categories)

    // const [changeCategory] = useChangeCategoryMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedCategories())
    }, [])

    // console.log(filters)

    const renderFiltersList = (arr) => {
        if (arr.lenght === 0) {
            return <h5>Помилка</h5>
        } 

        return arr.map(({id, name, label, img}) => {
            return <button
            tabIndex={0}
            className='main_filters__item'
            key={id}
            onClick={() => dispatch(activeCategoryChanged(name))}
            >
                <img src={img} alt="tank"/>
                <h3>{label}</h3>
            </button>
        })
    }

    const elements = renderFiltersList(category)
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