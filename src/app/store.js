import { configureStore } from '@reduxjs/toolkit'
import loginStateReducer from '../features/loginState'

export const store = configureStore({
    reducer: {
        loginState: loginStateReducer

    }
})