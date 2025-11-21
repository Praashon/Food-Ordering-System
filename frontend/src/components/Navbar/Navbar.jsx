import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const { getTotalCartAmount, token, setToken, searchQuery, setSearchQuery, userProfile, url } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll events for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not near top - hide navbar
        setShowNavbar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  // Update active menu based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setMenu('home');
    } else if (path === '/menu') {
      setMenu('menu');
    } else if (path === '/about') {
      setMenu('about');
    } else if (path === '/contact') {
      setMenu('contact');
    } else if (path === '/delivery') {
      setMenu('delivery');
    } else if (path === '/privacy') {
      setMenu('privacy');
    } else if (path === '/terms') {
      setMenu('terms');
    } else if (path === '/cookies') {
      setMenu('cookies');
    } else {
      setMenu('');
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (menuItem) => {
    setMenu(menuItem);
    setShowDropdown(false); // Close dropdown when navigating
    // Scroll to top immediately when navigating
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    setToken("");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <div className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <img src={assets.logo1} className="navbar-logo" alt="Hungry Heaven" />
          </Link>
          <ul className="navbar-menu">
            <Link
              to="/"
              onClick={() => handleNavClick("home")}
              className={`nav-link ${menu === "home" ? "active" : ""}`}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/menu"
              onClick={() => handleNavClick("menu")}
              className={`nav-link ${menu === "menu" ? "active" : ""}`}
            >
              <span>Menu</span>
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavClick("about")}
              className={`nav-link ${menu === "about" ? "active" : ""}`}
            >
              <span>About</span>
            </Link>
            <div className="dropdown-container">
              <button 
                className={`nav-link dropdown-toggle ${menu === "contact" || menu === "delivery" ? "active" : ""}`}
                onClick={toggleDropdown}
              >
                <span>Services</span>
                <svg 
                  className={`dropdown-arrow ${showDropdown ? 'rotated' : ''}`} 
                  width="12" 
                  height="8" 
                  viewBox="0 0 12 8" 
                  fill="none"
                >
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <Link
                  to="/contact"
                  onClick={() => handleNavClick("contact")}
                  className={`dropdown-item ${menu === "contact" ? "active" : ""}`}
                >
                  <span>Contact Us</span>
                </Link>
                <Link
                  to="/delivery"
                  onClick={() => handleNavClick("delivery")}
                  className={`dropdown-item ${menu === "delivery" ? "active" : ""}`}
                >
                  <span>Delivery Info</span>
                </Link>
              </div>
            </div>
          </ul>
          <div className="navbar-right">
            <div className="navbar-search">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  <img src={assets.search_icon} alt="Search" />
                </button>
              </form>
            </div>
            <div className="navbar-serach-icon">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="" />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            {!token ? (
              <button onClick={() => setShowLogin(true)}>Sign In</button>
            ) : (
              <div className="navbar-profile">
                {userProfile && userProfile.profileImage ? (
                  <img 
                    src={`${url}/images/${userProfile.profileImage}`} 
                    alt="Profile" 
                    className="profile-avatar"
                  />
                ) : (
                  <img src={assets.profile_icon} alt="" />
                )}
                <ul className="nav-profile-dropdown">
                  <li onClick={()=>navigate("/profile")}>
                    {userProfile && userProfile.profileImage ? (
                      <img 
                        src={`${url}/images/${userProfile.profileImage}`} 
                        alt="Profile" 
                        className="dropdown-avatar"
                      />
                    ) : (
                      <img src={assets.profile_icon} alt="" />
                    )}
                    <p>Profile</p>
                  </li>
                  <hr />
                  <li onClick={()=>navigate("/myorders")}>
                    <img src={assets.bag_icon} alt="" />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
