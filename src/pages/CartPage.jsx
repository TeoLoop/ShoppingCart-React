import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import '../styles/CartPage.css';
import { DeleteOutline, Add, Remove } from '@mui/icons-material';

export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handlerPurchase = () => {
    if (shoppingList.length === 0) return;

    Swal.fire({
      icon: 'success',
      title: 'Purchase Successful!',
      text: `Your order total is $${calculateTotal()}`,
      background: '#18181b',
      color: '#fafafa',
      confirmButtonColor: '#3b82f6',
      customClass: {
        popup: 'swal-premium-popup',
        title: 'swal-premium-title',
        confirmButton: 'swal-premium-btn'
      }
    });
    
    // Assuming clear function exists or we can just empty it.
    // If not, we can ignore emptying it for this visual overhaul.
  };

  return (
    <div className="cart-wrapper animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Your <span className="text-gradient">Cart</span></h1>
        <p className="page-subtitle">Review your items before proceeding to checkout.</p>
      </div>

      {shoppingList.length === 0 ? (
        <div className="empty-cart-message glass-panel">
          <h2>Your cart is currently empty</h2>
          <p>Discover our catalog to add some items.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {shoppingList.map(product => (
              <div key={product.id} className="cart-item glass-panel">
                <div className="item-image-box">
                  <img src={product.image} alt={product.title} />
                </div>
                
                <div className="item-details">
                  <h3>{product.title}</h3>
                  <div className="item-price">${product.price}</div>
                </div>

                <div className="item-controls">
                  <div className="quantity-control">
                    <button className="btn-icon" onClick={() => decrementQuantity(product.id)}>
                      <Remove fontSize="small" />
                    </button>
                    <span className="quantity-value">{product.quantity}</span>
                    <button className="btn-icon" onClick={() => incrementQuantity(product.id)}>
                      <Add fontSize="small" />
                    </button>
                  </div>
                  <div className="item-total-price">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                  <button 
                    className="btn-icon delete-btn" 
                    onClick={() => removeProduct(product.id)}
                    title="Remove item"
                  >
                    <DeleteOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary glass-panel">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="text-success">Free</span>
            </div>
            <div className="summary-separator"></div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            
            <button className="btn-primary checkout-btn" onClick={handlerPurchase}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
