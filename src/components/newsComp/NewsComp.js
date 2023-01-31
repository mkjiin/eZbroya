import tankExample from '../../imgs/example.jpg' 
import './newsComp.scss'

const NewsComp = () => {
    return (
        <div className="news">
            <h2 className='news__title'>Стрічка нових отриманнь</h2>
            <hr/>
            <img src={tankExample} alt="tank" className='news__slider'/>
            <div className='news__group'>
                <div className='news__button'></div>
                <div className='news__button'></div>
                <div className='news__button'></div>
            </div>
        </div>
    )
}

export default NewsComp;