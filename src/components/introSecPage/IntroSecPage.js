import './introSecPage.scss'
import tank from '../../imgs/1.jpg'
import slovenia from '../../imgs/icons/slovenia.png'
import { useSelector } from 'react-redux'

const IntroSecPage = () => {

    const { pageInfo } = useSelector(state => state.infoPage);
    
    const { name, introInfo, country_icon, description, img } = pageInfo 

    const renderList = (arr) => {
        // if (typeof arr !== 'undefined') {
            return arr.map((el, i) => {
                return <li className='intro__flex__info__list__item' key={i}>
                    <h3 className='intro__flex__info__list__item-title'>{el[0]}</h3>
                    <h3 className='intro__flex__info__list__item-text'>{el[1]}</h3>
                </li>
            })
        // }
    }

    const elements = renderList(introInfo);

    return (
        <div className='intro'>
            <div className='intro__title_flex'>
                <h1 className='intro__title'>{name}</h1>
                <img src={country_icon} alt="country" className='intro__title_img'/>
            </div>
            <div className='intro__content'>
                <div className='intro__flex'>
                   <div className='intro__flex__info'>
                    <ul className='intro__flex__info__list'>
                        {elements}
                    </ul>
                    <hr/>
                    {/* <h3 className='intro__content__info__status'>Очікується Збройними Силами</h3> */}
                </div>
                <img src={img} alt={name} className='intro__flex__img'/>
                </div>
                <p className='intro__description'>
                    {description}
                </p>
            </div>
        </div>
        
    )
}

export default IntroSecPage;