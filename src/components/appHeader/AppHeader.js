import logo from '../../imgs/icons/logo2.png';
import './appHeader.scss'

const AppHeader = () => {
    return (
        <header className="app__header">
            <img src={logo} alt="logo" className='app_header-logo'/>
            <hr />
        </header> 
    )
}

export default AppHeader;