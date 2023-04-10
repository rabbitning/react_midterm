import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import colorReducer from './colorSlice'
import markReducer from './bookMark'

const persistConfig = {
    key: 'knowEdge',
    storage
}

const persistedColorReducer = persistReducer(persistConfig, colorReducer)
const persistedMarkReducer = persistReducer(persistConfig, markReducer)

export const store = configureStore({
    reducer: {
        color: persistedColorReducer,
        bookmark: persistedMarkReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)