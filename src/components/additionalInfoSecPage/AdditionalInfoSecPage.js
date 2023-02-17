import { Carousel } from 'antd';
import './additionalInfoSecPage.scss'
import slide1 from '../../imgs/t55.jpg'
import logo from '../../imgs/icons/ukraine.png'

const AdditionalInfoSecPage = () => {
    return (
        <div className='info'>
            <div className='info__ua'>
                <div className='info__ua__title'>
                    <h2 className='info__ua__title-dynamic'>M-55S</h2>
                    <h2 className='info__ua__title-static'>та Україна</h2>
                    <img src={logo} alt="ua" className='info__ua__title-logo'/>
                </div>
                <ul className='info__ua__text-block'>
                    <li className='info__ua__text-item'>
                        <h2 className='info__ua__text'>У вересні 2022 року уряд Словенії повідомив, що Збройним Силам України будуть передані 28 модернізованих танків M-55S</h2>
                    </li>
                    <li className='info__ua__text-item'>
                        <h2 className='info__ua__text'>У вересні 2022 року уряд Словенії повідомив, що Збройним Силам України будуть передані 28 модернізованих танків M-55S</h2>
                    </li>
                    <li className='info__ua__text-item'>
                        <h2 className='info__ua__text'>У вересні 2022 року уряд Словенії повідомив, що Збройним Силам України будуть передані 28 модернізованих танків M-55S</h2>
                    </li>
                </ul>
            </div>
            <Carousel className='info__carousel'>
            <div>
                <img src={slide1} alt="tank"/>
            </div>
            <div>
                <img src={slide1} alt="tank"/>
            </div>
            <div>
                <img src={slide1} alt="tank"/>
            </div>
            </Carousel>
        </div>
    )
}

export default AdditionalInfoSecPage;