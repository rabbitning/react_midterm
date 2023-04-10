import { Provider } from "react-redux"
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'
import Router from './Router';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}