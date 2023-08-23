import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import authSlice from './slices/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combinedReducer from './combineReducer';
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  }

 const persistedReducer = persistReducer(persistConfig, combinedReducer)


export let store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})



export const persistor = persistStore(store)

