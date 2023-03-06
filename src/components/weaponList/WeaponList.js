import './weaponListCopy.scss';
import usa from '../../imgs/icons/usa.png'
import tank from '../../imgs/tank.jpg'

import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedWeapons } from './weaponSlice';
import { reset, weaponsPaginate } from '../weaponList/weaponSlice';
import Spinner from '../spinner/Spinner';

const WeaponList = () => {

    const [displayLoading, setDisplayLoading] = useState(false);
    const { weapons, weaponsLoadingStatus, activeCategory, activeFilter, weaponsEnded, start, end, yearValue, activeAdditionalFilter, activeStatus} = useSelector(state => state.weapons)
    const { restOfLink} = useSelector(state => state.infoPage)

    const dispatch = useDispatch();

    useEffect(() => {
        setDisplayLoading(true);
        dispatch(fetchedWeapons({activeCategory, start, end}));
    }, [activeCategory, activeFilter, yearValue, activeAdditionalFilter, activeStatus])

  
    const filtredWeapons = useMemo(() => {
      let filtredWeapons = weapons.slice();
    
      if (activeFilter !== 'all' || yearValue || activeAdditionalFilter !== 'all' || activeStatus !== 'all') {
          filtredWeapons = filtredWeapons.filter(el => {
          if (activeFilter === 'all' && activeAdditionalFilter === 'all' && activeStatus === 'all') {
            return el.yearValue === yearValue;
          } else if (yearValue === null && activeAdditionalFilter === 'all' && activeStatus === 'all') {
            return el.country === activeFilter;
          } else if (activeFilter === 'all' && yearValue === null && activeStatus === 'all') {
            return el.additionalFiltres === activeAdditionalFilter;
          } else if (activeFilter === 'all' && yearValue === null && activeAdditionalFilter === 'all') {
            return el.status === activeStatus;
          } else if (activeFilter === 'all' && activeAdditionalFilter === 'all') {
            return el.yearValue === yearValue && el.status === activeStatus;
          } else if (activeFilter === 'all' && yearValue === null) {
            return el.additionalFiltres === activeAdditionalFilter && el.status === activeStatus;
          } else if (activeFilter === 'all' && activeStatus === 'all') {
            return el.additionalFiltres === activeAdditionalFilter && el.yearValue === yearValue;
          } else if (activeAdditionalFilter === 'all' && yearValue === null) {
            return el.country === activeFilter && el.status === activeStatus;
          } else if (activeAdditionalFilter === 'all' && activeStatus === 'all') {
            return el.country === activeFilter && el.yearValue === yearValue;
          } else if (yearValue === null && activeStatus === 'all') {
            return el.country === activeFilter && el.additionalFiltres === activeAdditionalFilter;
          } else if (activeFilter === 'all') {
            return el.yearValue === yearValue && el.additionalFiltres === activeAdditionalFilter && el.status === activeStatus;
          }  else if (yearValue === null) {
            return el.country === activeFilter && el.additionalFiltres === activeAdditionalFilter && el.status === activeStatus;
          } else if (activeAdditionalFilter === 'all') {
            return el.yearValue === yearValue && el.country === activeFilter && el.status === activeStatus;
          } else if (activeStatus === 'all') {
            return el.yearValue === yearValue && el.country === activeFilter && el.additionalFiltres === activeAdditionalFilter;
          } else {
            return el.yearValue === yearValue && el.country === activeFilter && el.additionalFiltres === activeAdditionalFilter && el.status === activeStatus;
          }
        });
      }
    
      return filtredWeapons;
    }, [weapons]);
    

    useMemo(() => {
      if (weaponsLoadingStatus !== 'loading') {
        setDisplayLoading(false);
    }
    }, [weaponsLoadingStatus])

    // const onClick = (activeCategory, id) => {
    //   dispatch(getRestOfLink(`/${activeCategory}/${id}`));
    //   dispatch(reset())
    // }

    const renderWeapons = (arr) => {
        
        if (arr.length === 0 && weaponsLoadingStatus === 'idle') {
            return <h5 className='content__weapon_error'>Нажаль, ми не знайшли нічого під ваши фільтри</h5>
        }

        return arr.map(({name, id, img, country_icon, country, type}, i) => {
            const formattedName = name.replace(/\s+/g, '__');
            // const formattedType = type.replace(/\s+/g, '__');
            return <li className='content__weapon_item'
                    tabIndex={0}
                    key={i}
                    id={id}
                    >
                        <div className='content__weapon_item_title'>
                            <div className='content__weapon_item_name'>{name}</div>
                            <img src={country_icon} alt={country} className='content__weapon_item_country'/>
                        </div>
                        <div>
                        <Link to={`/${encodeURIComponent(type)}/${encodeURIComponent(formattedName)}/${encodeURIComponent(id-1)}`} className='content__weapon_item_link' onClick={() => dispatch(reset())}>
                            <img src={img} alt="tank" className='content__weapon_item_link_img'/>
                            <div className='content__weapon_item_link_overlay'>
                                <h2 className='content__weapon_item_more'>Подробиці</h2>
                            </div>
                        </Link>
                        </div>
                   </li>
        })
    }

    const element = renderWeapons(filtredWeapons)

    return (
        <div className='content__weapon'>
            <ul className='content__weapon_grid'>
                {displayLoading ? <Spinner/> : ''}
                {element}
            </ul>
            <button className='content__weapon_item_paggin' 
            onClick={async () => {
                const fetchedData = await dispatch(fetchedWeapons({activeCategory, start, end}));
                // console.log(fetchedData)
                dispatch(weaponsPaginate(fetchedData.payload))
              }}
            style={{"display" : weaponsEnded ? 'none' : 'block'}}
            >Більше..</button>
        </div>
    )
}   

export default WeaponList;