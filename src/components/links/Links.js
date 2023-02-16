import './links.scss';
import wiki from '../../imgs/icons/wiki.png'
import mil from '../../imgs/icons/mil.png'

const Links = () => {
    return (
        <div className='links'>
            <div className='links__buttons'>
                <a href="https://uk.wikipedia.org/wiki/%D0%A2-55">
                <div className='links__button'>
                    <img src={wiki} alt="wiki" />
                    <h2>Вікіпедія</h2>
                </div>
                </a>
                <a href="https://mil.in.ua/uk/tag/t-55/">
                <div className='links__button'>
                    <img src={mil} alt="wiki" />
                    <h2>Мілітарний</h2>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Links;