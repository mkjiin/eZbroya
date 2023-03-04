import AppHeaderInfoPage from "../../components/appHeaderInfoPage/AppHeaderInfoPage";
import './loadingPage.scss'


const LoadingPage = () => {
    return (
        <div className="loading-page">
            <AppHeaderInfoPage/>
            <h2 className="loading-page__text">Завантаження...</h2>
        </div>
    )
}

export default LoadingPage;