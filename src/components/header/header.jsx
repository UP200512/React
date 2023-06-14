import React from 'react';
import menu from "../../img/menu_icon.png"
import './header.css';


function Header( {links} ) {
  return (
    <header className="main-header">
      <div className="header-wrap">
        <div className="wrap-logo-header">
          <a className="logo-header" href="/Home">
            Crazy Fryer
          </a>
        </div>
        <div className="wrap-nav-header">
          <nav className="nav-header">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="toggle-menu">&lt;
              <img src={menu} alt="Menu"/>
              </i>
            </label>
            <ul className="main-menu">
              {links.map((link, index) => (
                <li className="menu-item" key={index}> {/**key para asigar un identificador unico que en este caso seria index */}
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
