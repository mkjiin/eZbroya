import './weaponList.scss';
import usa from '../../imgs/icons/usa.png'
import tank from '../../imgs/tank.jpg'
import like from '../../imgs/icons/like.png'

const WeaponList = () => {
    return (
        <div className='content__weapon'>
            <ul className='content__weapon_grid'>
                <li className='content__weapon_item'>
                    <div className='content__weapon_item_title'>
                        <div className='content__weapon_item_name'>Abrams</div>
                        <img src={usa} alt="usa" className='content__weapon_item_country'/>
                    </div>
                    <img src={tank} alt="tank" className='content__weapon_item_img'/>
                    <div className='content__weapon_item_buttons'>
                        <button className='content__weapon_item_more'>Подробиці</button>
                    </div>
                </li>
                <li className='content__weapon_item'>
                    <div className='content__weapon_item_title'>
                        <div className='content__weapon_item_name'>Abrams</div>
                        <img src={usa} alt="usa" className='content__weapon_item_country'/>
                    </div>
                    <img src={tank} alt="tank" className='content__weapon_item_img'/>
                    <div className='content__weapon_item_buttons'>
                        <button className='content__weapon_item_more'>Подробиці</button>
                    </div>
                </li>
                <li className='content__weapon_item'>
                    <div className='content__weapon_item_title'>
                        <div className='content__weapon_item_name'>Abrams</div>
                        <img src={usa} alt="usa" className='content__weapon_item_country'/>
                    </div>
                    <img src={tank} alt="tank" className='content__weapon_item_img'/>
                    <div className='content__weapon_item_buttons'>
                        <button className='content__weapon_item_more'>Подробиці</button>
                    </div>
                </li>
                <li className='content__weapon_item'>
                    <div className='content__weapon_item_title'>
                        <div className='content__weapon_item_name'>Abrams</div>
                        <img src={usa} alt="usa" className='content__weapon_item_country'/>
                    </div>
                    <img src={tank} alt="tank" className='content__weapon_item_img'/>
                    <div className='content__weapon_item_buttons'>
                        <button className='content__weapon_item_more'>Подробиці</button>
                    </div>
                </li>
            </ul>
            <button className='content__weapon_item_paggin'>Більше..</button>
        </div>
    )
}

export default WeaponList;