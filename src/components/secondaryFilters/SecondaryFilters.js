import './secondaryFilters.scss';
import ua from '../../imgs/icons/ukraine.png'
import devil from '../../imgs/icons/devil.png';
import nato from '../../imgs/icons/nato.png'

import Countries from './countries/Countires';
import SearchForm from '../searchForm/SearchForm';
import Calibres from './calibres/Calibres';
import AdditionalFiltres from './additionalFilter';
import { activeFilterChanged, activeFilterReset } from '../weaponList/weaponSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedAdditionalFiltres } from './secondaryFiltresSlice'
import { useEffect } from 'react';


const SecondaryFilters = () => {
    
    const { activeCategory } = useSelector(state => state.weapons)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchedAdditionalFiltres(1))
    // }, [])

    return (
        <div className='content__sec-filters'>
            <Countries/>
            {/* {
                (activeCategory === "tanks" ||
                activeCategory === "ahs" ||
                activeCategory === "mrl" ||
                activeCategory === "av" ||
                activeCategory === "howitzer")
                ? <Calibres />
                : ''
            } */}
            {/* <Calibres/> */}
            <AdditionalFiltres/>
            <SearchForm/>
        </div>
    )
}

export default SecondaryFilters;