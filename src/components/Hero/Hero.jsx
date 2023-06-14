import React from 'react';
import "./Hero.css";


function HeroHomePage() {
  return (
    <div className='wrap-header-hero'>
    <section className="hero-home-page">
      <div className="wrap-hero-home-page">
        <h1>Bienvenidos</h1>
        <br />
        <p>
          Aquí se come como en casa <span>pero sin tener que lavar los platos</span>
        </p>
        <a href="pedidos.html" className="cta-main">
          Hacer pedido
        </a>
      </div>
    </section>
    </div>
  );
}

export default HeroHomePage;
