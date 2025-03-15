import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

    const initialState = []

    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Product':
                return [...state, action.playload]
            case '[CART] Remove Product':
                return state.filter(product => product.id !== action.playload)
            case '[CART] Increment Quantity':// TODO FALTA INCREMENTEAR LA CANTIDAD
                return state.map(product => {
                    const cant = product.quantity + 1
                    if (product.id === action.playload) return { ...product, quantity: cant }
                    return product
                })
            case '[CART] Decrement Quantity':// TODO FALTA DECREMENTEAR LA CANTIDAD
                return state.map(product => {
                    const cant = product.quantity - 1
                    if (product.id === action.playload && product.quantity >1) return { ...product, quantity: cant }
                    return product
                })
            default:
                break;
        }
    }

    const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add Product',
            playload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            playload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            playload: id
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            playload: id
        }
        dispatch(action)
    }


    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
