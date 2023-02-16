import { Carousel } from 'antd';
import './additionalInfoSecPage.scss'
import slide1 from '../../imgs/t55.jpg'
import logo from '../../imgs/icons/ukraine.png'

const AdditionalInfoSecPage = () => {
    return (
        <div className='info'>
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
            <div className='info__ua'>
                <div className='info__ua__title'>
                    <h2 className='info__ua__title-dynamic'>M-55S</h2>
                    <h2 className='info__ua__title-static'>та Україна</h2>
                    <img src={logo} alt="ua" className='info__ua__title-logo'/>
                </div>
                <div className='info__ua__text-block'>
                    <p className='info__ua__text'>
                    У вересні 2022 року уряд Словенії повідомив, 
                    що Збройним Силам України будуть передані 
                    28 модернізованих танків M-55S
                    <br />
                    <br />
                    В грудні 2022 року стало відомо, 
                    що танки надійшли на озброєння
                    47-ої окремої механізованої бригади
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfoSecPage;