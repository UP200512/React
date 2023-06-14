import React from "react";
// import "./HomePage.css";
import Header from '../../components/header/header.jsx';
import HeroHomePage from "../../components/Hero/Hero";
import Footer from "../../components/footer/footer";
import Container from "../../components/Card_container/Card_Container";



function HomePage() {

  const headerLinks = [
    { url: '/Carta', text: 'Carta' },
    { url: '/Pedidos', text: 'Pedidos' },
    { url: '/Estadisticas', text: 'Estadisticas' }
  
  ];

  return (
    <div>
      <Header links={headerLinks}/>
      <HeroHomePage/>
      <Container/>
      <Footer/>
    </div>
        
     
  );
}

export default HomePage;