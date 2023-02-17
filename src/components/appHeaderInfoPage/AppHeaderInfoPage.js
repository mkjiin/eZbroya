import logo from '../../imgs/icons/logo2.png';
import './appHeaderInfoPage.scss'
import { Link } from 'react-router-dom';

const AppHeaderInfoPage = () => {
    return (
        <header className="app__header-info">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='app_header-info-logo'/>
                </Link>
            <hr />
        </header> 
    )
}

export default AppHeaderInfoPage;