import { useState } from 'react';
import { pizzas as pizzaCart } from '../utils/pizzas';
import { formatNumberToES } from "../utils/format-numbers";

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart.map((pizza) => ({ ...pizza, quantity: 0 })));

    const increaseQuantity = (id) => {
        setCart(cart.map(pizza =>
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(pizza => (pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 } : pizza))
            .filter(pizza => pizza.quantity > 0));
    };

    const calculateTotal = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
    };


    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">
                Carrito de Compras
            </h1>
            <div className="row">
                {cart.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">{pizza.desc}</p>
                                <p className="card-text"><strong>Precio:</strong> ${pizza.price}</p>
                                <p className="card-text"><strong>Cantidad:</strong> {pizza.quantity}</p>
                                <div className="d-flex-justify-content-between">
                                    <button className="btn btn-outline-success" onClick={() => increaseQuantity(pizza.id)}>+</button>
                                    <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h2>Total: ${formatNumberToES(calculateTotal())}</h2>
                <button className="btn btn-success" onClick={() => alert("Pagar")}>Pagar</button>
            </div>
        </div>
    )
}


export default Cart;