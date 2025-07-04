import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ 
      backgroundColor: 'transparent', 
      backdropFilter: 'blur(10px)', 
      // color: 'white', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50 
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 16px' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '64px' 
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{ 
              color: '#8B0000', 
              fontSize: '1.9rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.025em', 
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out' 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#8B0000'}
            onMouseOut={(e) => e.currentTarget.style.color = '8B0000'}
          >
            Satis-Fact Engineering
          </Link>

          {/* Desktop Menu */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            '@media (max-width: 768px)': { display: 'none' } 
          }}>
            <Link 
              to="/" 
              style={{ 
                color: '#8B0000',
                textDecoration: 'none', 
                fontWeight: '550',
                transition: 'color 0.2s ease-in-out' ,
                
              }}
              
              
            >
              Home
            </Link>
            <Link 
              to="/services" 
              style={{ 
                 color: '#8B0000',
                textDecoration: 'none', 
                fontWeight: '550',
                transition: 'color 0.2s ease-in-out' 
              }}
              
              
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              style={{ 
                 color: '#8B0000',
                textDecoration: 'none', 
                fontWeight: '600',
                transition: 'color 0.2s ease-in-out' 
              }}
              
             
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ 
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' } 
          }}>
            <button
              onClick={toggleMenu}
              style={{
                padding: '8px',
                borderRadius: '6px',
                background: 'none',
                border: 'none',
              
                cursor: 'pointer',
                outline: 'none'
              }}
              aria-label="Toggle menu"
            >
              <svg
                style={{ width: '24px', height: '24px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ 
            display: 'none',
            '@media (max-width: 768px)': { 
              display: 'block',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              padding: '8px 8px 12px'
            } 
          }}>
            <div style={{ marginTop: '4px' }}>
              <Link
                to="/"
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                onClick={toggleMenu}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Home
              </Link>
              <Link
                to="/services"
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                onClick={toggleMenu}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Services
              </Link>
              <Link
                to="/contact"
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                onClick={toggleMenu}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;