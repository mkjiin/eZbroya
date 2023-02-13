import logo from '../../imgs/icons/logo2.png';
import './appHeader.scss'


const AppHeader = () => {
    return (
        <header className="app__header">
            <img src={logo} alt="logo" className='app_header-logo'/>
            <h2 className='app__header-title'>Енциклопедія озброєння</h2>
            <hr />
        </header> 
    )
}

export default AppHeader;