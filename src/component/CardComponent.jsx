import React, { useContext, useEffect, useState } from 'react';
import '../styles/CardComponent.css';
import { CartContext } from '../context/CartContext';

export const CardComponent = ({ id, title, image, description, price, handlerAdd, handlerRemove }) => {
    const { shoppingList } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const addProduct = () => {
        handlerAdd();
        setAdded(true);
    };

    const removeProduct = () => {
        handlerRemove();
        setAdded(false);
    };

    useEffect(() => {
        const boolean = shoppingList.some((product) => product.id === id);
        setAdded(boolean);
    }, [shoppingList, id]);

    return (
        <div className="card animate-fade-in">
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                
                <div className="card-actions">
                    {added ? (
                        <button
                            type="button"
                            className="btn-primary remove-button add-button"
                            onClick={removeProduct}
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn-primary add-button"
                            onClick={addProduct}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
