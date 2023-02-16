import logo from '../../imgs/icons/logo2.png';
import './appHeaderInfoPage.scss'


const AppHeaderInfoPage = () => {
    return (
        <header className="app__header-info">
            <img src={logo} alt="logo" className='app_header-info-logo'/>
            <hr />
        </header> 
    )
}

export default AppHeaderInfoPage;