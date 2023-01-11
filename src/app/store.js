import { configureStore } from '@reduxjs/toolkit';
import loginStateReducer from '../features/loginState';
import cartManagementReducer from '../features/cartManagement';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, cartManagementReducer)

export const store = configureStore({
    reducer: {
        loginState: loginStateReducer,
        cartManagement: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER, PAUSE]
        }
    })
})

export const persistor = persistStore(store)