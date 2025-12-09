import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Home, Grid, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-amber-600 font-semibold' : 'text-wood-800 hover:text-amber-600';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-wood-900 to-amber-700 leading-tight">
                SRI VIJAYALAXMI
              </span>
              <span className="text-xs sm:text-sm text-amber-600 tracking-[0.15em] font-medium">
                DOORS & FRAMES
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center gap-2 ${isActive('/')}`}>
              <Home size={18} /> Home
            </Link>
            <Link to="/catalog" className={`flex items-center gap-2 ${isActive('/catalog')}`}>
              <Grid size={18} /> Catalog
            </Link>
            <Link to="/contact" className={`flex items-center gap-2 ${isActive('/contact')}`}>
              <Phone size={18} /> Contact
            </Link>
            <Link to="/cart" className="relative bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition flex items-center gap-2 shadow-sm hover:shadow-md">
              <ShoppingBag size={18} />
              <span>Quote List</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-4 relative text-wood-800" onClick={closeMenu}>
               <ShoppingBag size={24} />
               {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-wood-800 hover:text-amber-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-wood-50 border-t border-wood-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-wood-900 hover:bg-wood-200"
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-wood-900 hover:bg-wood-200"
            >
              Catalog
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-wood-900 hover:bg-wood-200"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;