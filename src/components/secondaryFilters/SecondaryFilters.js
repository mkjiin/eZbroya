import './secondaryFilters.scss';
import ua from '../../imgs/icons/ukraine.png'
import devil from '../../imgs/icons/devil.png';
import nato from '../../imgs/icons/nato.png'

import Countries from './countries/Countires';
import YearFilter from './yearFilter/YearFilter';
import Status from './status/Status';
import AdditionalFiltres from './additionalFiltres/additionalFilter';
import { activeFilterChanged, activeFilterReset } from '../weaponList/weaponSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedAdditionalFiltres } from './secondaryFiltresSlice'
import { useEffect } from 'react';


const SecondaryFilters = () => {
    
    const { activeCategory } = useSelector(state => state.weapons)

    return (
        <div className='content__sec-filters'>
            <Countries/>
            {
                (activeCategory === "tanks" ||
                activeCategory === "ahs" ||
                activeCategory === "av" ||
                activeCategory === "zrk")
                ? <Status />
                : ''
            }
            {activeCategory === 'other' ? '' : <AdditionalFiltres/>}
            <YearFilter/>
            {/* <button className='content__sec-filters__button-country'></button> */}
        </div>
    )
}

export default SecondaryFilters;