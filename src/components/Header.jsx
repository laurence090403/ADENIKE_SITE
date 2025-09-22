import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.css";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isHome ? "header-home" : "header-other"}`}>
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={handleMenuClick}>
          <img src="/ADENIKE.png" alt="ADENIKE Logo" className="logo-image" />
        </Link>

        {/* BOUTON HAMBURGER */}
        <button 
          className={`hamburger ${isOpen ? "hamburger-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de navigation"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button> 

        {/* NAVIGATION */}
        <nav className={`navigation ${isOpen ? "navigation-open" : ""}`}>
     
          <Link to="/histoire" className="nav-link" onClick={handleMenuClick}>
            Notre Histoire
          </Link>
          <Link to="/mission" className="nav-link" onClick={handleMenuClick}>
            Notre Mission
          </Link>
          <Link to="/projets" className="nav-link" onClick={handleMenuClick}>
            Réalisations
          </Link>
               <Link to="/products" className="nav-link" onClick={handleMenuClick}>
            Produits & Services
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleMenuClick}>
            Contact
          </Link>
        </nav>

        
        {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
      </div>
    </header>
  );
}