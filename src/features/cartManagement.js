import { createSlice } from "@reduxjs/toolkit";


const cartManagement = createSlice({
    name: 'cartManagement',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.value.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++
            } else {
                state.value.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.value.filter((item) => item.id !== action.payload)
            state.value = removeItem
        },
        incrementQuantity: (state, action) => {
            const item = state.value.find((item) => item.id === action.payload)
            item.quantity++
        },
        decrementQuantity: (state, action) => {
            const item = state.value.find((item) => item.id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        clearCart: (state) => {
            state.value = []
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartManagement.actions;
export default cartManagement.reducer