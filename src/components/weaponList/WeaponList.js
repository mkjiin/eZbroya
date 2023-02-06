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

    const { weapons, weaponsLoadingStatus, activeCategory, limit, weaponsEnded, start, end} = useSelector(state => state.weapons)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedWeapons({activeCategory, start, end}));
    }, [activeCategory])

    console.log(weapons)

    const renderWeapons = (arr) => {

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

    const element = renderWeapons(weapons)

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