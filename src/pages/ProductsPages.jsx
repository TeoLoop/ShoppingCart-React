import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {CardComponent} from '../component/CardComponent'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'
export const ProductsPages = () => {

  const {products}=useContext(ProductContext)
  const {addProduct, removeProduct} = useContext(CartContext)

  return (
    <>
      <h1>Catalogo</h1>
      <hr />
      { products.map(product=>(
          <CardComponent
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handlerAdd={()=> addProduct(product)}
          handlerRemove={()=> removeProduct(product.id)}
          />
        ))}
    </>
  )
}
