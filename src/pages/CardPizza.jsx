import { FaPizzaSlice } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const CardPizza = ({ pizza }) => {
    console.log(pizza);
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
}

export default CardPizza;