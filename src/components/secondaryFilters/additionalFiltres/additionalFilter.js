import { useDispatch, useSelector } from 'react-redux';
import { fetchedAdditionalFiltres } from '../secondaryFiltresSlice'
import { useEffect } from 'react';
import { additionalFilterChanged, activeAdditionalFilterReset } from '../../weaponList/weaponSlice';

const AdditionalFiltres = () => {
    const { additionalFiltresdata, additionalFiltresId } = useSelector(state => state.additionalFiltres)
    const { activeAdditionalFilter, activeCategory } = useSelector(state => state.weapons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedAdditionalFiltres(additionalFiltresId))
    }, [additionalFiltresId])

    const handleFilterClick = (el) => {
      if (el === activeAdditionalFilter) {
          dispatch(activeAdditionalFilterReset())
      } else {
          dispatch(additionalFilterChanged(el))
      }
  }

    const renderAdditionalFiltresList = (arr) => {
        return arr.map(el => {
          return (
            <li className={`content__sec-filters__button-country ${activeAdditionalFilter === el ? 'active' : ''}`}
            key={el}
            onClick={() => handleFilterClick(el)}
            >
              <div className="content__sec-filters__button-country-name">
              {(activeCategory === 'Реактивні Системи Залпового Вогню') ? el + ' km' : (activeCategory === 'Авіація' || activeCategory === 'Протиповітрянна Оборона') ? el : el + ' mm'}
              </div>
            </li>
          );
        });
      };

    const filters = additionalFiltresdata['filters']
    const elements = renderAdditionalFiltresList(filters)
    
    return (
        <div className='content__sec-filters__addfilter'>
        <h2 className='content__sec-filters__title-country'>{additionalFiltresdata['mainLabel']}</h2>
        <ul className='content__sec-filters__buttons-country'>
            {elements}
           
        </ul>
        <hr className='content__sec-filters__horizontal'/>
        </div>
    )
} 

export default AdditionalFiltres;