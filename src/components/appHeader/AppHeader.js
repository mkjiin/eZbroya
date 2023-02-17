import logo from '../../imgs/icons/logo2.png';
import './appHeader.scss'
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <Link to={'/'}>
                    <img src={logo} alt="logo" className='app_header-info-logo'/>
            </Link>
            <h2 className='app__header-title'>Енциклопедія озброєння</h2>
            <hr />
        </header> 
    )
}

export default AppHeader;