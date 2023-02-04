import './weaponList.scss';
import usa from '../../imgs/icons/usa.png'
import tank from '../../imgs/tank.jpg'


import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedWeapons } from './weaponSlice';
import { useHttp } from '../../hooks/http.hook';
import { useGetWeaponsQuery, useChangeCategoryMutation } from '../../api/apiSlice';


const WeaponList = () => {

    const { weapons, weaponsLoadingStatus, activeCategory, limit } = useSelector(state => state.weapons)
    const dispatch = useDispatch();

    // const  {
    //     currentData: weapons = [],
    //     isLoading
    // } = useGetWeaponsQuery();

    // const [changeCategory, {data: res = []}] = useChangeCategoryMutation();

    // const filtredWeapons = useMemo(() => {
    //     const filtredWeapons = weapons.slice();

    //     return filtredWeapons.filter(el => el.type === activeCategory)
        
    // }, [weapons, activeCategory]);

    useEffect(() => {
        dispatch(fetchedWeapons({activeCategory, limit: 1}));
        // console.log(weapons)
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
                        <img src={img} alt="tank" className='content__weapon_item_img'/>
                        <div className='content__weapon_item_buttons'>
                            <button className='content__weapon_item_more'>Подробиці</button>
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
            <button className='content__weapon_item_paggin' onClick={() => dispatch(fetchedWeapons({activeCategory, limit: 2}))}>Більше..</button>
        </div>
    )
}

export default WeaponList;