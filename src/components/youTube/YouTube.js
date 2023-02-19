import './youTube.scss'
import { useSelector } from 'react-redux'

const YouTube = () => {
    const {  pageInfo } = useSelector(state => state.infoPage);
    const { resources } = pageInfo
 
    

    return (
        <div className='youtube'>
            <iframe width="1328" height="650" src={`https://www.${resources.youtube}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <hr />
        </div>
    )
}

export default YouTube