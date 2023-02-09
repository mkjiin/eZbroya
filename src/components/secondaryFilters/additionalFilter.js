import { useDispatch, useSelector } from 'react-redux';
import { fetchedAdditionalFiltres } from './secondaryFiltresSlice'
import { useEffect } from 'react';

const AdditionalFiltres = () => {
    const { additionalFiltresdata } = useSelector(state => state.additionalFiltres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedAdditionalFiltres())
    }, [])

    const renderAdditionalFiltresList = (arr) => {
        // console.log(arr)
        return arr.map(el => {
            return <li className={`content__sec-filters__button-country`}>
                        <div className='content__sec-filters__button-country-name'>{el}</div>
                    </li>
        })
    }
    const filters = additionalFiltresdata['filters'];
    // console.log(filters);
    const elements = renderAdditionalFiltresList(filters)
    
    return (
        <div className='content__sec-filters__addfilter'>
        <h2 className='content__sec-filters__title-country'>{additionalFiltresdata['mainLabel']}</h2>
        <ul className='content__sec-filters__buttons-country'>
            {elements}
            {/* <li className={`content__sec-filters__button-country`}>
                    <div className='content__sec-filters__button-country-name'>Україна</div>
            </li> */}
        </ul>
        <hr className='content__sec-filters__horizontal'/>
        <hr className='content__sec-filters__vertical'/>
        </div>
    )
} 

export default AdditionalFiltres;