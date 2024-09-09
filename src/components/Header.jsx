import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <div className="overlay">
                <div className="text-center text-white">
                    <h1>Bienvenido a Pizzería Mamma Mia!</h1>
                    <p> Explore nuestras deliciosas pizzas</p>
                </div>
            </div>
        </header>
    );
}


export default Header;