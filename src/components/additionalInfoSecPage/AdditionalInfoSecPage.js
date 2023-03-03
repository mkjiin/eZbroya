import { Carousel } from 'antd';
import './additionalInfoSecPage.scss'
import slide1 from '../../imgs/t55.jpg'
import logo from '../../imgs/icons/ukraine.png'
import { useSelector } from 'react-redux';

const AdditionalInfoSecPage = () => {

    const { pageInfo } = useSelector(state => state.infoPage);

    const { img , uaInfo, name} = pageInfo;

    const renderList = (arr) => {
            return arr.map((el, i) => {
                return <li className='info__ua__text-item' key={i}>
                    <h2 className='info__ua__text'>{el}</h2>
                </li>
            })
    }

    const renderSlider = (arr) => {
        const cuttedArr = arr.slice(0, 3)

        return cuttedArr.map((el , i) => {
            return (
                <div
                key={i}>
                    <img src={el} alt="sliderPhoto" />
                </div>
            )
        })
    }

    const listItem = renderList(uaInfo)
    const slides = renderSlider(img)

    return (
        <div className='info'>
            <div className='info__ua'>
                <div className='info__ua__title'>
                    <h2 className='info__ua__title-dynamic'>{name}</h2>
                    <h2 className='info__ua__title-static'>та Україна</h2>
                    <img src={logo} alt="ua" className='info__ua__title-logo'/>
                </div>
                <ul className='info__ua__text-block'>
                    {listItem}
                </ul>
            </div>
            <Carousel className='info__carousel'>
            {slides}
            </Carousel>
        </div>
    )
}

export default AdditionalInfoSecPage;