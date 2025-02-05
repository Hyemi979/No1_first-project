import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Preference from '../pages/Preference'
import Layout from '../components/commons/Layout'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/preference" element={<Preference />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
