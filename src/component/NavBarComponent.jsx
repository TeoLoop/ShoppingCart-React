import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom"; // Asegúrate de usar react-router-dom en lugar de react-router
import { CartContext } from "../context/CartContext";
import "../styles/NavBarComponent.css";

export const NavBarComponent = () => {
  const { shoppingList } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Mercado de prueba
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link">
                Carrito
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="cart-icon" to="/carrito">
          <Badge
            badgeContent={shoppingList.length > 0 ? shoppingList.length : null} // Solo mostrar el número si hay artículos
            color="primary"
          >
            <ShoppingCart />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};
