import './newsComp.scss'
import { Carousel } from 'antd';

const NewsComp = () => {
       
    return (
        <div className="news">
      <Carousel dotPosition='bottom'>
        <div>
        <a href="#" className='news__link'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/slider%2Fslider1.png?alt=media&token=089a226e-58ed-4f0b-a7c4-0156694da4d3' alt="tank" className='news__link_img'/>
                            <div className='news__link_overlay'>
                                <h2 className='news__more'>Дізнатися про техніку</h2>
                            </div>
                        </a>
        </div>
        <div>
        <a href="#" className='news__link'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/slider%2Fslider2.jpg?alt=media&token=31e1ec61-7c42-45ec-b971-052c23bd9c4f' alt="tank" className='news__link_img'/>
                            <div className='news__link_overlay'>
                            <h2 className='news__more'>Дізнатися про техніку</h2>
                            </div>
                        </a>
        </div>
        <div>
        <a href="#" className='news__link'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/slider%2Fslider3.png?alt=media&token=fc34f810-316c-42e1-8c4b-70c3081be75e' alt="tank" className='news__link_img'/>
                            <div className='news__link_overlay'>
                            <h2 className='news__more'>Дізнатися про техніку</h2>
                            </div>
                        </a>
        </div>
      </Carousel>
        </div>
    )
}

export default NewsComp;