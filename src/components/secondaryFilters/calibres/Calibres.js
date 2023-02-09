


const Calibres = () => {
    return (
        <>
        <h2 className='content__sec-filters__title-country'>Країна виробник</h2>
            <ul className='content__sec-filters__buttons-country'>
                <li className={`content__sec-filters__button-country`}
                // onClick={() => handleFilterClick('ua')}
                // disabled={weaponsLoadingStatus === 'loading' ? true : false}
                >
                    <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/devil.png?alt=media&token=1c3a275b-2f91-4840-9733-042379f6ea92' alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Україна</div>
                </li>
                <li className={`content__sec-filters__button-country`}
                // onClick={() => handleFilterClick('nt')}
                >
                    <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/devil.png?alt=media&token=1c3a275b-2f91-4840-9733-042379f6ea92' alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Іноземні</div>
                </li>
                <li className={`content__sec-filters__button-country`}
                // onClick={() => handleFilterClick('tr')}
                >
                    <img src='https://firebasestorage.googleapis.com/v0/b/ezbroya-a0009.appspot.com/o/devil.png?alt=media&token=1c3a275b-2f91-4840-9733-042379f6ea92' alt="ua" />
                    <div className='content__sec-filters__button-country-name'>Трофейні</div>
                </li>
            </ul>
            <hr className='content__sec-filters__horizontal'/>
            <hr className='content__sec-filters__vertical'/>
        </>
    )
}

export default Calibres