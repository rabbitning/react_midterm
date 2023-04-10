import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useSelector } from "react-redux"
import Home from './pages/Home'
import AuthorPage from './pages/AuthorPage'
import { darkTheme, lightTheme } from './theme'
import { selectLightMode } from "./redux/colorSlice"

function Router() {
    const lightMode = useSelector(selectLightMode)
    const theme = lightMode ? lightTheme : darkTheme
    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='author/:authorname' element={<AuthorPage />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default Router;