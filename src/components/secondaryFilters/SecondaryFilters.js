import './secondaryFilters.scss';
import ua from '../../imgs/icons/ukraine.png'
import devil from '../../imgs/icons/devil.png';
import nato from '../../imgs/icons/nato.png'

import Countries from './countries/Countires';
import YearFilter from './yearFilter/YearFilter';
import Status from './status/Status';
import AdditionalFiltres from './additionalFiltres/additionalFilter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideFilter } from './secondaryFiltresSlice';

const SecondaryFilters = () => {
    
    const { activeCategory } = useSelector(state => state.weapons)
    const { filterShowStatus} = useSelector(state => state.additionalFiltres)

    const dispatch = useDispatch();

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('content__overflow')) {
            dispatch(hideFilter());
        }
    }

    useEffect(() => {
        if (filterShowStatus) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [filterShowStatus]);

    return (
        <div className={filterShowStatus ? 'content__overflow' : 'content__overflow-hide'} onClick={handleOverlayClick}>
            <div className={filterShowStatus ? 'content__sec-filters_active' : 'content__sec-filters'}>
                <div className='content__sec-filters__back-button' onClick={() => dispatch(hideFilter())}>
                    <h2 className='content__sec-filters__back-button__title'>Назад</h2>
                </div>
                <Countries/>
                {
                    (activeCategory === "Танки" ||
                    activeCategory === "Самохідні Артилерійські Установки" ||
                    activeCategory === "Бойові Машини Піхоти" ||
                    activeCategory === "Протиповітрянна Оборона")
                    ? <Status />
                    : ''
                }
                {activeCategory === 'Інше' ? '' : <AdditionalFiltres/>}
                <YearFilter/>
                {/* <button className='content__sec-filters__button-country'></button> */}
            </div>
        </div>
    )
}

export default SecondaryFilters;