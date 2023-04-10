import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { ConfigProvider } from 'antd'
import store from './redux/store'
import Home from './pages/Home'
import './App.css'
import theme from './theme'

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  )
}