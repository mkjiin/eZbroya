import './introSecPage.scss'
import tank from '../../imgs/1.jpg'
import slovenia from '../../imgs/icons/slovenia.png'

const IntroSecPage = () => {
    return (
        <div className='intro'>
            <div className='intro__title_flex'>
                <h1 className='intro__title'>M-55S</h1>
                <img src={slovenia} alt="country" className='intro__title_img'/>
            </div>
            <div className='intro__content'>
                <div className='intro__flex'>
                {/* <div> */}
                   <div className='intro__flex__info'>
                    <ul className='intro__flex__info__list'>
                        <li className='intro__flex__info__list__item'>
                            <h3 className='intro__flex__info__list__item-title'>Тип: </h3>
                            <h3 className='intro__flex__info__list__item-text'>Танк</h3>
                        </li>
                        <li className='intro__flex__info__list__item'>
                            <h3 className='intro__flex__info__list__item-title'>Походження: </h3>
                            <h3 className='intro__flex__info__list__item-text'>СРСР</h3>
                        </li>
                        <li className='intro__flex__info__list__item'>
                            <h3 className='intro__flex__info__list__item-title'>Модифікатор: </h3>
                            <h3 className='intro__flex__info__list__item-text'>Словенія</h3>
                        </li>
                        <li className='intro__flex__info__list__item'>
                            <h3 className='intro__flex__info__list__item-title'>На озброєнні: </h3>
                            <h3 className='intro__flex__info__list__item-text'>з 1999р.</h3>
                        </li>
                        <li className='intro__flex__info__list__item'>
                            <h3 className='intro__flex__info__list__item-title'>Калібр: </h3>
                            <h3 className='intro__flex__info__list__item-text'>105 мм</h3>
                        </li>
                    </ul>
                    <hr/>
                    {/* <h3 className='intro__content__info__status'>Очікується Збройними Силами</h3> */}
                {/* </div> */}
                </div>
                <img src={tank} alt="tank" className='intro__flex__img'/>
                </div>
                <p className='intro__description'>Т-55 — середній танк радянської розробки. Випускався як модифікація Т-54 з 1958 р.  Усього з урахуванням варіантів, що випускалися в інших країнах, було випущено до 100 тисяч Т-54/55, що зробило його найчисленнішим танком в історії. 
                <br />
                <br />
                До 1999 року Словенія модернізувала наявні 30 машин до рівня M-55S. У ході 
                модернізації танки отримали нову 105-мм гармату L7 з тепловим кожухом.
                До 1999 року Словенія модернізувала наявні 30 машин до рівня M-55S. У ході 
                модернізації танки отримали нову 105-мм гармату L7 з тепловим кожухом
                </p>
            </div>
        </div>
        
    )
}

export default IntroSecPage;