import { Provider } from "react-redux"
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './Router'
import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}