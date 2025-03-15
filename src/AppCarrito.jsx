import React from 'react'
import { NavBarComponent } from './component/navBarComponent'
import { Navigate, Route, Routes } from 'react-router'
import { ProductsPages } from './pages/ProductsPages'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const AppCarrito = () => {
  return (
    <ProductProvider>
      <CartProvider>

        <NavBarComponent />
        <div className="container">
          <Routes>
            <Route path='/' element={<ProductsPages />}> </Route>
            <Route path='/carrito' element={<CartPage />}> </Route>
            <Route path='/*' element={<Navigate to='/' />}> </Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  )
}
