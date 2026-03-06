import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/NavBarComponent.css";

export const NavBarComponent = () => {
  const { shoppingList } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        
        <NavLink to="/" className="navbar-brand">
          <span className="text-gradient">Shop</span>Now
        </NavLink>
        
        <div className="navbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Catalog
          </NavLink>
          
          <NavLink to="/carrito" className="cart-icon-container">
            <ShoppingCart fontSize="small" />
            {shoppingList.length > 0 && (
              <span className="cart-badge">{shoppingList.length}</span>
            )}
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
};
