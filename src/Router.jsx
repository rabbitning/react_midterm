import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Home from './pages/Home'
import AuthorPage from './pages/AuthorPage'
import Article from './pages/Article'
import { selectLightMode } from "./redux/colorSlice"
import identify from './palette'

export default function Router() {
    const Mode = useSelector(selectLightMode)
    identify(Mode)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='author/:username' element={<AuthorPage />} />
                <Route path='article/:id' element={<Article />} />
            </Routes>
        </BrowserRouter>
    )
}