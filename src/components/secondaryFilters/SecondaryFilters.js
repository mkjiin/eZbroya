import './secondaryFilters.scss';
import ua from '../../imgs/icons/ukraine.png'
import devil from '../../imgs/icons/devil.png';
import nato from '../../imgs/icons/nato.png'

const SecondaryFilters = () => {
    return (
        <div className='content__sec-filters'>
            <h2 className='content__sec-filters__title-country'>Країна виробник</h2>
            <ul className='content__sec-filters__buttons-country'>
                <li className='content__sec-filters__button-country'>
                    <img src={ua} alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Україна</div>
                </li>
                <li className='content__sec-filters__button-country'>
                    <img src={nato} alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Іноземні</div>
                </li>
                <li className='content__sec-filters__button-country'>
                    <img src={devil} alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Трофейні</div>
                </li>
            </ul>
            <hr className='content__sec-filters__horizontal'/>
            <hr className='content__sec-filters__vertical'/>
        </div>
    )
}

export default SecondaryFilters;