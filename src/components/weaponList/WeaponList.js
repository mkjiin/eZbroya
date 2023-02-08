import './weaponListCopy.scss';
import usa from '../../imgs/icons/usa.png'
import tank from '../../imgs/tank.jpg'


import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedWeapons } from './weaponSlice';
import { useHttp } from '../../hooks/http.hook';
import { useGetWeaponsQuery, useChangeCategoryMutation } from '../../api/apiSlice';
import { limitChange, setEnd, weaponsPaginate } from '../weaponList/weaponSlice';

const WeaponList = () => {
    // console.log('WeaponList component rendered');

    const [displayLoading, setDisplayLoading] = useState(false);
    const { weapons, weaponsLoadingStatus, activeCategory, activeFilter, weaponsEnded, start, end, yearValue} = useSelector(state => state.weapons)
    const dispatch = useDispatch();

    useEffect(() => {
        setDisplayLoading(true);
        dispatch(fetchedWeapons({activeCategory, start, end}));
    }, [activeCategory, activeFilter, yearValue])

    // const filtredWeapons = useMemo(() => {
    //     const filtredWeapons = weapons.slice();

    //     if (activeFilter === 'all' && yearValue === null) {
    //         return filtredWeapons;
    //     } else {
    //         return filtredWeapons.filter(el => el.yearValue === yearValue || el.country === activeFilter)
    //     }
    // }, [weapons, activeFilter, yearValue]); 

    const filtredWeapons = useMemo(() => {
        let filtredWeapons = weapons.slice();
      
        if (activeFilter !== 'all' || yearValue) {
            filtredWeapons = filtredWeapons.filter(el => {
            if (activeFilter === 'all') {
              return el.yearValue === yearValue;
            } else if (yearValue === null) {
              return el.country === activeFilter;
            } else {
              return el.yearValue === yearValue && el.country === activeFilter;
            }
          });
        }
      
        return filtredWeapons;
      }, [weapons, activeFilter, yearValue]);
      
    


    useEffect(() => {
        if (weaponsLoadingStatus !== 'loading') {
          setDisplayLoading(false);
        }
      }, [weaponsLoadingStatus])

      if (displayLoading) {
        return <h5 className='content__weapon_loading'>Завантаження..</h5>
      }
    

    const renderWeapons = (arr) => {
        
        if (arr.length === 0 && weaponsLoadingStatus === 'idle') {
            return <h5 className='content__weapon_error'>Нажаль, ми не знайшли нічого під ваши фільтри</h5>
        }

        return arr.map(({name, id, img, country_icon, country}) => {
            return <li className='content__weapon_item'
                    tabIndex={0}
                    key={id}
                    id={id}>
                        <div className='content__weapon_item_title'>
                            <div className='content__weapon_item_name'>{name}</div>
                            <img src={country_icon} alt={country} className='content__weapon_item_country'/>
                        </div>
                        <div>
                        <a href="#" className='content__weapon_item_link'>
                            <img src={img} alt="tank" className='content__weapon_item_link_img'/>
                            <div className='content__weapon_item_link_overlay'>
                                <h2 className='content__weapon_item_more'>Подробиці</h2>
                            </div>
                        </a>
                        </div>
                   </li>
        })
    }

    const element = renderWeapons(filtredWeapons)

    return (
        <div className='content__weapon'>
            <ul className='content__weapon_grid'>
                {element}
            </ul>
            <button className='content__weapon_item_paggin' 
            onClick={async () => {
                const fetchedData = await dispatch(fetchedWeapons({activeCategory, start, end}));
                dispatch(weaponsPaginate(fetchedData.payload))
              }}
            style={{"display" : weaponsEnded ? 'none' : 'block'}}
            >Більше..</button>
        </div>
    )
}   

export default WeaponList;