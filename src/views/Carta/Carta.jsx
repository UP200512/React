import React from 'react';
// import './Carta.css';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import Container from '../../components/Card_container/Card_Container';


function Carta(){
    const headerLinks = [
        { url: '/Home', text: 'Pagina Principal' },
        { url: '/Pedidos', text: 'Pedidos' },
        { url: '/Estadisticas', text: 'Estadisticas' }
      
      ];

    return(
        <div>
        <Header links={headerLinks}/>
        <Container/>
        <Footer/>
    </div>

    );
}

export default Carta;



