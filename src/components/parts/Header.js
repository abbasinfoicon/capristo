import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.capristo-main-header-area');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('fixed') : header.classList.remove('fixed');
  };

  return (
    <header className="capristo-main-header-area dark_themes">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="search-box-custom desktop-none">
              <form>
                <input type="search" placeholder="Search" />
                <button type="submit"><img src="assets/img/search.png" alt="" className="img-fluid" /></button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">

            <nav className="navbar navbar-expand-lg bg-light navbar-light custom-navbar">
              <div className="site-logo">
                <Link to="/">
                  <img src="assets/img/logo.svg" alt="Capristo" className="img-logo" />
                  <img src="assets/img/logo_white.svg" alt="Capristo" className="img-logo logo_white" />
                </Link>
              </div>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li><NavLink to='/car-list'>Products & Services</NavLink></li>
                  <li><NavLink to='/contact'>Company</NavLink></li>
                  <li><NavLink to='/shop'>Online Store</NavLink></li>
                  <li><NavLink to='/blog'>Blog & News</NavLink></li>
                </ul>

                <div className="search-box-custom mobile-none">
                  <div className="search-box">
                    <button className="btn-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                    <input type="text" className="input-search" placeholder="Type to Search..." />
                  </div>
                </div>
              </div>
            </nav>

            <div className="dropdown custom-lgu">
              <button className="btn-dropdown dropdown-toggle" type="button" id="dropdownlang" data-toggle="dropdown"
                aria-haspopup="true">
                <img src="assets/img/en.png" alt="lang" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownlang">
                <li><img src="assets/img/fa.png" alt="lang" /></li>
                <li><img src="assets/img/ca.png" alt="lang" /></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header