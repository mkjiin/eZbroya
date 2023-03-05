import './introSecPage.scss'
import tank from '../../imgs/1.jpg'
import slovenia from '../../imgs/icons/slovenia.png'
import { useSelector } from 'react-redux'
import wing from '../../imgs/icons/wing.png'

const IntroSecPage = () => {

    const { pageInfo } = useSelector(state => state.infoPage);

    const { name, introInfo, country_icon, description, img, status } = pageInfo 

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
            <div className='intro__wrapper'>
            <div className='intro__title_flex'>
                <h1 className='intro__title'>{name}</h1>
                <img src={country_icon} alt="country" className='intro__title_img'/>
                {country_icon === 'https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/usa.png?alt=media&token=af9ae9d5-6133-4aa9-8b2a-e62f73b80f11' ? <img src={wing} alt="wing" className='intro__title_img'/> : ''}
            </div>
            <div className='intro__content'>
                <div className='intro__flex'>
                   <div className='intro__flex__info'>
                    <ul className='intro__flex__info__list'>
                        {elements}
                    </ul>
                    <hr/>
                    {status === 'no' ? <h3 className='intro__status'>Очікується Збройними Силами</h3> : ''}
                </div>
                <img src={img[3]} alt={name} className='intro__flex__img'/>
                </div>
                <p className='intro__description'>
                    {description}
                </p>
            </div>
            </div>
        </div>
        
    )
}

export default IntroSecPage;