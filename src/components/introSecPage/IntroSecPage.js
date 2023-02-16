import './introSecPage.scss'
import tank from '../../imgs/1.jpg'

const IntroSecPage = () => {
    return (
        <div className='intro'>
            <div className='intro__content'>
                <div>
                <h1 className='intro__title'>M-55S</h1>
                <div className='intro__content__info'>
                    <ul className='intro__content__info__list'>
                        <li className='intro__content__info__list__item'>
                            <h3 className='intro__content__info__list__item-title'>Тип: </h3>
                            <h3 className='intro__content__info__list__item-text'>Танк</h3>
                        </li>
                        <li className='intro__content__info__list__item'>
                            <h3 className='intro__content__info__list__item-title'>Походження: </h3>
                            <h3 className='intro__content__info__list__item-text'>СРСР</h3>
                        </li>
                        <li className='intro__content__info__list__item'>
                            <h3 className='intro__content__info__list__item-title'>Модифікатор: </h3>
                            <h3 className='intro__content__info__list__item-text'>Словенія</h3>
                        </li>
                        <li className='intro__content__info__list__item'>
                            <h3 className='intro__content__info__list__item-title'>На озброєнні: </h3>
                            <h3 className='intro__content__info__list__item-text'>з 1999р.</h3>
                        </li>
                        <li className='intro__content__info__list__item'>
                            <h3 className='intro__content__info__list__item-title'>Калібр: </h3>
                            <h3 className='intro__content__info__list__item-text'>105 мм</h3>
                        </li>
                    </ul>
                    <hr/>
                    {/* <h3 className='intro__content__info__status'>Очікується Збройними Силами</h3> */}
                </div>
                </div>
                <img src={tank} alt="tank" className='intro__content__img'/>
            </div>
        </div>
    )
}

export default IntroSecPage;