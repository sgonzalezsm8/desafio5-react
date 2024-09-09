import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';


const NotFound = () => {
    return (
        <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-100" style={{ background: 'linear-gradient(135deg, #ff6f61 0%, #fdd365 100%)' }}>
            <FontAwesomeIcon
                icon={faPizzaSlice}
                size="6x"
                className="text-light mb-4 animate-icon"
                style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <h1 className="display-1 text-white">404</h1>
            <p className="lead text-white">¡Oh no! Parece que esta página está fuera del menú.</p>
            <Link to="/" className="btn btn-outline-light btn-lg mt-4">Volver al Inicio</Link>
        </div>
    );
}





export default NotFound;