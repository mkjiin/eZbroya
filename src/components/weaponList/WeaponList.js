import './weaponList.scss';
import usa from '../../imgs/icons/usa.png'
import tank from '../../imgs/tank.jpg'


import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedWeapons } from './weaponSlice';
import { useHttp } from '../../hooks/http.hook';


const WeaponList = () => {

    const { weapons, weaponsLoadingStatus } = useSelector(state => state.weapons)
    const { activeCategory } = useSelector(state => state.categories)
    const dispatch = useDispatch();

    const filtredWeapons = useMemo(() => {
        const filtredWeapons = weapons.slice();

        return filtredWeapons.filter(el => el.type === activeCategory)
        
    }, [weapons, activeCategory]);

    useEffect(() => {
        dispatch(fetchedWeapons());
    }, [])

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
                        <img src={img} alt="tank" className='content__weapon_item_img'/>
                        <div className='content__weapon_item_buttons'>
                            <button className='content__weapon_item_more'>Подробиці</button>
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
            <button className='content__weapon_item_paggin' >Більше..</button>
        </div>
    )
}

export default WeaponList;