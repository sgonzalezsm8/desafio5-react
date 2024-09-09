import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPizzaSlice } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Pizza = () => {
    const [pizza, setPizza] = useState(null); //Almaceno los datos de la pizza
    const [loading, setLoading] = useState(true); //Controlo el loading
    const [error, setError] = useState(null); //Manejo de error

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                //await new Promise(resolve => setTimeout(resolve, 1000));

                const response = await fetch('http://localhost:5000/api/pizzas/p001');

                if (!response.ok) {
                    throw new Error('Error al obtener información de la pizza');
                }

                const dataPizza = await response.json();
                setPizza(dataPizza); //Actualizo estado con los datos
                setLoading(false); //ya esta cargado
            } catch (ex) {
                setError(ex.message); //Manejo error
                setLoading(false); //finaliza loading en caso de error
            }
        };

        fetchPizza(); //Consume la api
    }, []); //Con array vacio[] se ejecuta solo una vez

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden"> Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> {error}
            </div>
        ); //Muestro el error
    }

    return (
        <div className="card h-100 mb-4">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                    <h5 className="card-title">Pizza {pizza.name}</h5>
                </li>
                <li className="list-group-item">
                    <p className="card-text"><FaPizzaSlice /> Ingredientes</p>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="list-group-item">
                    <p className="card-text"><strong>Precio: ${pizza.price}</strong></p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-outline-secondary me-2 btn-sm"><FaRegEye /> Ver más</a>
                        <a href="#" className="btn btn-dark me-2 btn-sm"><FaShoppingCart /> Añadir</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};


export default Pizza;
