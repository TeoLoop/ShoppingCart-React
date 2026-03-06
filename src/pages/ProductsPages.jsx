import React, { useContext } from 'react';
import { CardComponent } from '../component/CardComponent';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import '../styles/ProductsPages.css';

export const ProductsPages = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <div className="catalog-wrapper animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Explore <span className="text-gradient">Products</span></h1>
        <p className="page-subtitle">Discover our premium selection specially curated for you.</p>
      </div>
      
      <div className="catalog-grid">
        {products.map(product => (
          <CardComponent
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            handlerAdd={() => addProduct(product)}
            handlerRemove={() => removeProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
