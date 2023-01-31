import './mainFilters.scss'
import icon from '../../imgs/icons/tank.png'

const MainFilters = () => {
    return (
        <div className='main_filters'>
            <h2 className='main_filters__title'>Оберіть категорію</h2>
            <hr className='main_filters__first-line'/>
            <ul className='main_filters__grid'>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
                <li className='main_filters__item'>
                    <img src={icon} alt="tank"/>
                    <h3>Танки</h3>
                </li>
            </ul>
            <hr className='main_filters__second-line'/>
        </div>
    )
}

export default MainFilters;