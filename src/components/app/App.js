import { MainPage, InfoPage } from "../../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../../style/style.scss'

const App = () => {

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/:type/:name/:id' element={<InfoPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;