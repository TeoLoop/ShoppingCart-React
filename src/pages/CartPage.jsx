import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlerPurchase = () => {
    const productPurchase = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se realizó con éxito',
      html: `<p>Has comprado:</p><pre>${productPurchase}</pre>`
    })
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Mi Carrito</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {shoppingList.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image} 
                    alt={product.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Ajusta el tamaño de la imagen
                  />
                </td>
                <th scope="row">{product.title}</th>
                <td>${product.price}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <button
                    className='btn btn-outline-primary me-2'
                    onClick={() => decrementQuantity(product.id)}
                  >-</button>

                  <button className='btn btn-primary disabled'>{product.quantity}</button>

                  <button
                    className='btn btn-outline-primary ms-2'
                    onClick={() => incrementQuantity(product.id)}
                  >+</button>
                </td>

                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => removeProduct(product.id)}
                  >Eliminar</button>
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan="4" className="text-end"><b>TOTAL:</b></th>
              <td><b>${calculateTotal()}</b></td>
            </tr>
          </tbody>
        </table>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-success" type="button" onClick={handlerPurchase}>Realizar Compra</button>
        </div>
      </div>
    </>
  )
}
