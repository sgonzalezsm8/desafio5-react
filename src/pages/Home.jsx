import Header from '../components/Header';
import CardPizza from './CardPizza'
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const [pizzas, setPizzas] = useState([]); //Almaceno las pizzas
    const [loading, setLoading] = useState(true); //Controlo el loading
    const [error, setError] = useState(null); //Manejo error

    useEffect(() => {
        //defino una funcion asincrona para consumnir la API
        const fetchPizzas = async () => {
            try{
                //Simulo un retraso de 1 segundos para probar el spinner
                //await new Promise(resolve => setTimeout(resolve, 1000));

                const response = await fetch('http://localhost:5000/api/pizzas');
                
                if(!response.ok){
                    throw new Error('Error al obtener el listado de pizzas')
                }
                
                const dataPizzas = await response.json();
                setPizzas(dataPizzas); //Actualizo el estado con los datos
                setLoading(false); //Desactivo el loading
            }catch (ex){
                setError(ex.message); //Si hay error, actualizo el error
                setLoading(false); //Desactivo el loading
            }
        };

        fetchPizzas(); //Ejecuto la funcion asincrona
    }, []); //El array vacio [] asegura que solo se ejecuta una vez, al montar el componente

    if(loading){
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden"> Cargando...</span>
                </div>
            </div>  
        );       
    }

    if(error){
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> {error}
            </div>
        ); //Muestro el error
    }

    return (
        <div>
            <Header />
            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza pizza={pizza} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Home;