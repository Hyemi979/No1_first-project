import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Preference from '../pages/Preference'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/preference" element={<Preference />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
