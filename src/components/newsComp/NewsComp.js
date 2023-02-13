import './newsComp.scss'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchedSlider } from './newsSlice';
import { useEffect } from 'react';

const NewsComp = () => {

    const { slider } = useSelector(state => state.slider); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedSlider())
    }, [])
       
    const renderSlider = (arr) => {
        return arr.map(({sliderPhoto}) => {
            return (
            <div>
                <a href="#" className='news__link'>
                    <img src={sliderPhoto} alt="tank" className='news__link_img'/>
                    <div className='news__link_overlay'>
                        <h2 className='news__more'>Дізнатися про техніку</h2>
                    </div>
                </a>
            </div>
            )
        })
    }

    const slides = renderSlider(slider)

    return (
        <div className="news">
      <Carousel dotPosition='bottom'>
        {slides}
      </Carousel>
        </div>
    )
}

export default NewsComp;